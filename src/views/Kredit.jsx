import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  creditsSum,
  debitsSum,
  fetchAccaunts,
  credits,
  addAccaunt,
} from "../store/accountSlice";
import { App } from "../styles.css";
import Balance from "../components/Balance";
import Movments from "../components/Movments";

const Kredit = () => {
  const [transferAmount, setTransferAmount] = useState(0);
  const dispatch = useDispatch();

  const postStatus = useSelector((state) => state.accaunt.status);
  const accaunts = useSelector(credits);
  const debit = useSelector(debitsSum);
  const credit = useSelector(creditsSum);
  const authUser = useSelector((state) => state.user.authenticatedUser);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchAccaunts(authUser.id));
    }
  }, [postStatus, dispatch, authUser]);

  const handleTransferAmount = (e) => {
    e.preventDefault();
    const data = {
      id: String(new Date().getTime()),
      type: "credit",
      user: authUser.id,
      amount: +transferAmount,
      created_at: new Date(),
      updated_at: new Date(),
    };
    dispatch(addAccaunt(data));
    setTransferAmount(0);
  };

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
          <form className="form form--loan">
            <input
              type="number"
              value={transferAmount ? transferAmount : ""}
              onInput={(e) => setTransferAmount(e.target.value)}
              className="form__input form__input--loan-amount"
            />
            <button
              onClick={handleTransferAmount}
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

export default Kredit;
