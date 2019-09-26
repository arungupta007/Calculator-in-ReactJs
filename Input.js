import React from "react";

const Input = props => {
  const displayValue = props;
  return (
    <div>
      <input
        id="input"
        type="text"
        className="text"
        value={displayValue.value}
        onKeyDown={props.numbersOnly}
      />
    </div>
  );
};
export default Input;
