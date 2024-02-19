import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAccaunts, selectAllAccaunts } from "../store/accountSlice";

const Kredit = () => {
  const dispatch = useDispatch();

  const accaunts = useSelector(selectAllAccaunts);
  const postStatus = useSelector((state) => state.accaunt.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchAccaunts());
    }
  }, [postStatus, dispatch]);

  return (
    <div>
      <h1>Kredit</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {accaunts.length &&
        accaunts.map((ac) => <div key={ac.amount}>{ac.amount}</div>)}
    </div>
  );
};

export default Kredit;
