import { useSelector } from "react-redux";
import { sum } from "../store/accountSlice";
import { dateConfig } from "../helpers/dateConfig";
import { formatNumber } from "../helpers/formatNumbers";
import { useState } from "react";

const Balance = () => {
  const summ = useSelector(sum);
  const [date, setDate] = useState(Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <section className="balance">
      <div className="balance__cont">
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">{dateConfig(date)}</span>
        </p>
      </div>
      <p className="balance__value">{formatNumber(summ)}sum</p>
    </section>
  );
};

export default Balance;
