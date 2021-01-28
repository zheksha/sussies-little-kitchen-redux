import React, { useState, useEffect } from "react";
import "./buttonAddRemove.scss";

function ButtonAddRemove(props) {
  const [itemNumber, setItemNumber] = useState("");
  useEffect(() => {
    setItemNumber(props.inputValue);
  }, [props.inputValue]);

  const onInputChange = (e) => {
    setItemNumber(e.target.value);
  };

  return (
    <div className="btn-group ">
      <button onClick={props.buyItem} type="button" className="btn btn-success">
        ＋
      </button>
      <input
        type="number"
        className="form-control item-input"
        value={itemNumber}
        onChange={onInputChange}
      />
      <button
        onClick={props.returnItem}
        type="button"
        className="btn btn-danger"
      >
        −
      </button>
    </div>
  );
}

export default ButtonAddRemove;
