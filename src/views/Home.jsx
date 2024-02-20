import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { App } from "../styles.css";
import Balance from "../components/Balance";
import {
  fetchAccaunts,
  selectAllAccaunts,
  creditsSum,
  debitsSum,
} from "../store/accountSlice";
import Header from "../components/Header";
import Movments from "../components/Movments";

const Home = () => {
  const dispatch = useDispatch();
  const accauntStatus = useSelector((state) => state.accaunt.status);
  const accaunts = useSelector(selectAllAccaunts);
  const debit = useSelector(debitsSum);
  const credit = useSelector(creditsSum);

  useEffect(() => {
    if (accauntStatus === "idle") {
      dispatch(fetchAccaunts());
    }
  }, [accauntStatus, dispatch]);

  return (
    <section id="home">
      <Header />

      <App className="app">
        <Balance />
        <Movments accaunts={accaunts} />

        <div className="summary">
          <p className="summary__label">In</p>
          <p className="summary__value summary__value--in">{debit}sum</p>
          <p className="summary__label">Out</p>
          <p className="summary__value summary__value--out">{credit}sum</p>
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
            <input type="text" className="form__input form__input--user" />
            <input
              type="password"
              maxLength="6"
              className="form__input form__input--pin"
            />
            <button className="form__btn form__btn--close">&rarr;</button>
            <label className="form__label">USER</label>
            <label className="form__label">PIN</label>
          </form>
        </div>
      </App>
    </section>
  );
};

export default Home;
