/* eslint-disable react/prop-types */
import { dateConfig } from "../helpers/dateConfig";
import menuicon from "../assets/ellipsis-vertical.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delAccaunt, updAccaunt } from "../store/accountSlice";
import { formatNumber } from "../helpers/formatNumbers";

const Movments = ({ accaunts }) => {
  const dispatch = useDispatch();
  const [acc_id, setAcc_id] = useState(null);
  const [edit, setEdit] = useState(null);
  const [editValue, setEditValue] = useState("");

  const onEdit = (id, amount) => {
    setEdit(id);
    setEditValue(amount);
  };
  const onDelete = (id) => {
    dispatch(delAccaunt(id));
  };
  const editAmount = () => {
    setEditValue("");
    setEdit(null);
    const data = {
      id: edit,
      data: {
        amount: +editValue,
        updated_at: new Date(),
      },
    };
    dispatch(updAccaunt(data));
  };
  const closeEdit = () => {
    setEdit(null);
    setEditValue("");
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
                <input
                  onInput={(e) => setEditValue(e.target.value)}
                  className="edit--input"
                  value={editValue}
                  type="number"
                  name="amount"
                  placeholder="amount"
                />
              ) : (
                <span>{formatNumber(accaunt.amount)}sum</span>
              )}
            </div>
            {edit === accaunt.id ? (
              <div className="edit--btns">
                <button
                  onClick={() => editAmount(accaunt)}
                  className="trash-btn"
                >
                  {/* <i className="far fa-paper-plane"></i> */}
                  SEND
                </button>
                <button onClick={closeEdit} className="close-btn">
                  CANCEL
                  {/* <i className="far fa-reverse"></i> */}
                </button>
              </div>
            ) : (
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
                    <div>
                      <button
                        onClick={() => onEdit(accaunt.id, accaunt.amount)}
                        type="button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(accaunt.id)}
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Movments;
