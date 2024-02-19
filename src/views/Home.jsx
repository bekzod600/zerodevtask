// import { DefaultButton } from "../components/Buttons";
// import { Title } from "../components/Texts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Chart } from "react-google-charts";
import { dateConfig } from "../helpers/dateConfig";
import {
  fetchAccaunts,
  selectAllAccaunts,
  creditsSum,
  debitsSum,
  sum,
} from "../store/accountSlice";
import Header from "../components/Header";

const Home = () => {
  const dispatch = useDispatch();
  const accauntStatus = useSelector((state) => state.accaunt.status);
  const accaunts = useSelector(selectAllAccaunts);
  const summ = useSelector(sum);
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

      <main className="app">
        {/* <!-- BALANCE --> */}
        <div className="balance">
          <div>
            <p className="balance__label">Current balance</p>
            <p className="balance__date">
              {/* As of <span className="date">05/03/2037</span> */}
              As of <span className="date">{dateConfig(Date())}</span>
            </p>
          </div>
          <p className="balance__value">{summ}sum</p>
        </div>

        <div className="movements">
          {accaunts.map((accaunt) => {
            return (
              <div key={accaunt.id} className="movements__row">
                <div
                  className={`movements__type movements__type--${
                    accaunt.type === "debit" ? "deposit" : "withdrawal"
                  }`}
                >
                  {accaunt.type === "debit" ? "deposit" : "withdrawal"}
                </div>
                <div className="movements__date">
                  {dateConfig(accaunt.created_at)}
                </div>
                <div className="movements__value">{accaunt.amount}sum</div>
              </div>
            );
          })}
        </div>

        <div className="summary">
          <p className="summary__label">In</p>
          <p className="summary__value summary__value--in">{debit}sum</p>
          <p className="summary__label">Out</p>
          <p className="summary__value summary__value--out">{credit}sum</p>
        </div>

        {/* <div className="operation operation--transfer">
          <h2>Transfer money</h2>
          <form className="form form--transfer">
            <input type="text" className="form__input form__input--to" />
            <input type="number" className="form__input form__input--amount" />
            <button className="form__btn form__btn--transfer">&rarr;</button>
            <label className="form__label">Transfer to</label>
            <label className="form__label">Amount</label>
          </form>
        </div>

        <div className="operation operation--loan">
          <h2>Request loan</h2>
          <form className="form form--loan">
            <input
              type="number"
              className="form__input form__input--loan-amount"
            />
            <button className="form__btn form__btn--loan">&rarr;</button>
            <label className="form__label form__label--loan">Amount</label>
          </form>
        </div> */}
        <Chart
          chartType="PieChart"
          data={[
            ["Task", "Account book"],
            ["debit", debit],
            ["credit", credit],
          ]}
          style={{ fontSize: "20px" }}
          options={{
            title: "Account book",
          }}
        />
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
      </main>
    </section>
  );
};

export default Home;
