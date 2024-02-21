import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { App } from "../styles.css";
import Balance from "../components/Balance";
import { useNavigate } from "react-router-dom";
import {
  fetchAccaunts,
  selectAllAccaunts,
  creditsSum,
  debitsSum,
} from "../store/accountSlice";
import { addAuthUser } from "../store/userSlice";
import Header from "../components/Header";
import Movments from "../components/Movments";

const Home = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    user: "",
    pin: "",
  });
  const dispatch = useDispatch();
  const accauntStatus = useSelector((state) => state.accaunt.status);
  const authUser = useSelector((state) => state.user.authenticatedUser);
  const accaunts = useSelector(selectAllAccaunts);
  const debit = useSelector(debitsSum);
  const credit = useSelector(creditsSum);

  useEffect(() => {
    if (!authUser.user) navigate("/login");
  });

  useEffect(() => {
    if (accauntStatus === "idle") {
      dispatch(fetchAccaunts(authUser.id));
    }
  }, [accauntStatus, dispatch, authUser]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((form) => {
      return { ...form, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.user !== authUser.user || form.pin !== authUser.pin) {
      return alert("Please write correct user and pin");
    }
    localStorage.setItem("authUser", JSON.stringify({}));
    dispatch(addAuthUser({}));
    navigate("/login");
  };

  return (
    <section id="home">
      <Header />
      <App className="app">
        <Balance />
        <Movments accaunts={accaunts} />

        <div className="summary">
          <div>
            <p className="summary__label">In</p>
            <p className="summary__value summary__value--in">{debit}sum</p>
          </div>
          <div>
            <p className="summary__label">Out</p>
            <p className="summary__value summary__value--out">{credit}sum</p>
          </div>
        </div>

        <div className="chart">
          <Chart
            chartType="PieChart"
            data={[
              ["Task", "Account book"],
              ["debit", debit],
              ["credit", credit],
            ]}
            height={"100%"}
            options={{
              title: "Account book",
            }}
          />
        </div>

        <div className="operation operation--close">
          <h2>Close account</h2>
          <form className="form form--close">
            <input
              value={form.user}
              onChange={handleChange}
              type="text"
              name="user"
              className="form__input form__input--user"
            />
            <input
              value={form.pin}
              onChange={handleChange}
              type="password"
              name="pin"
              maxLength="6"
              className="form__input form__input--pin"
            />
            <button
              onClick={handleSubmit}
              className="form__btn form__btn--close"
            >
              &rarr;
            </button>
            <label className="form__label">USER</label>
            <label className="form__label">PIN</label>
          </form>
        </div>
      </App>
    </section>
  );
};

export default Home;
