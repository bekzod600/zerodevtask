import Header from "../components/Header";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  creditsSum,
  debitsSum,
  fetchAccaunts,
  credits,
} from "../store/accountSlice";
import { App } from "../styles.css";
import Balance from "../components/Balance";
import Movments from "../components/Movments";

const Kredit = () => {
  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.accaunt.status);
  const accaunts = useSelector(credits);
  const debit = useSelector(debitsSum);
  const credit = useSelector(creditsSum);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchAccaunts());
    }
  }, [postStatus, dispatch]);

  return (
    <section id="kredit">
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

        <div className="operation operation--transfer">
          <h2>Transfer money</h2>
          <form className="form form--transfer">
            <input type="text" className="form__input form__input--to" />
            <input type="number" className="form__input form__input--amount" />
            <button className="form__btn form__btn--transfer">&rarr;</button>
            <label className="form__label">Transfer to</label>
            <label className="form__label">Amount</label>
          </form>
        </div>
      </App>
    </section>
  );
};

export default Kredit;
