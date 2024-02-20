import { useSelector } from "react-redux";
import { sum } from "../store/accountSlice";
import { dateConfig } from "../helpers/dateConfig";

const Balance = () => {
  const summ = useSelector(sum);

  return (
    <section className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">{dateConfig(Date())}</span>
        </p>
      </div>
      <p className="balance__value">{summ}sum</p>
    </section>
  );
};

export default Balance;
