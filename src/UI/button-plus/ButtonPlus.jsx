import React from "react";
import classes from "./ButtonPlus.module.css";

const ButtonPlus = (props) => {
  let chosed = props.chosed;
  let type = props.type;
  let onClick = props.onClick;
  if (!chosed) {
    return (
      <button className={classes.button} data-biketype={type} onClick={onClick}>
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={classes.buttonItem}
            d="M1 6H11M6 1V11"
            stroke="#297FFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  } else {
    return (
      <button className={classes.button_active} data-biketype={type} onClick={onClick}>
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3L3.99951 6L8.99951 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }
};

export default ButtonPlus;
