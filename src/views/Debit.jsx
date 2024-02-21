import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  creditsSum,
  debits,
  debitsSum,
  fetchAccaunts,
  addAccaunt,
} from "../store/accountSlice";
import { App } from "../styles.css";
import Balance from "../components/Balance";
import Movments from "../components/Movments";

const Debit = () => {
  const dispatch = useDispatch();

  const [loanAmount, setLoanAmount] = useState(0);

  const postStatus = useSelector((state) => state.accaunt.status);
  const accaunts = useSelector(debits);
  const debit = useSelector(debitsSum);
  const credit = useSelector(creditsSum);
  const authUser = useSelector((state) => state.user.authenticatedUser);

  const handleLoanAmount = (e) => {
    e.preventDefault();
    const data = {
      id: String(new Date().getTime()),
      type: "debit",
      user: authUser.id,
      amount: +loanAmount,
      created_at: new Date(),
      updated_at: new Date(),
    };
    dispatch(addAccaunt(data));
    setLoanAmount(0);
  };

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchAccaunts(authUser.id));
    }
  }, [postStatus, dispatch, authUser]);

  return (
    <section id="debit">
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

        <div className="operation operation--loan">
          <h2>Request loan</h2>
          <form className="form form--loan">
            <input
              type="number"
              value={loanAmount ? loanAmount : ""}
              onInput={(e) => setLoanAmount(e.target.value)}
              className="form__input form__input--loan-amount"
            />
            <button
              onClick={handleLoanAmount}
              className="form__btn form__btn--loan"
            >
              &rarr;
            </button>
            <label className="form__label form__label--loan">Amount</label>
          </form>
        </div>
      </App>
    </section>
  );
};

export default Debit;
