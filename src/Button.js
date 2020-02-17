import React from "react";

const Button = props => {
  return (
    <button className="button">
      {props.model} - {props.price} €
    </button>
  );
};

export default Button;
