/* eslint-disable react/prop-types */
import { dateConfig } from "../helpers/dateConfig";
import menuicon from "../assets/ellipsis-vertical.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delAccaunt, updAccaunt } from "../store/accountSlice";

const Movments = ({ accaunts }) => {
  const dispatch = useDispatch();
  const [acc_id, setAcc_id] = useState(null);
  const [edit, setEdit] = useState(null);

  const onEdit = (id) => {
    setEdit(id);
    dispatch(updAccaunt(id));
  };
  const onDelete = (id) => {
    dispatch(delAccaunt(id));
  };

  return (
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
              {dateConfig(accaunt.updated_at)}
            </div>
            <div className="movements__value">
              {edit === accaunt.id ? (
                <input type="number" name="amount" placeholder="amount" />
              ) : (
                <span>{accaunt.amount}sum</span>
              )}
            </div>
            <div
              className="movements_menu"
              onClick={() =>
                setAcc_id((acc_id) =>
                  acc_id === accaunt.id ? null : accaunt.id
                )
              }
            >
              <img width={"16px"} src={menuicon} alt="menu icon" />
              {acc_id === accaunt.id && (
                <div className="popup-menu">
                  <button onClick={() => onEdit(accaunt.id)} type="button">
                    Edit
                  </button>
                  <button onClick={() => onDelete(accaunt.id)} type="button">
                    Delit
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movments;
