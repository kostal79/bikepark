import React from "react";
import classes from './ButtonQuestion.module.css'

const ButtonQuestion = () => {
  return (
    <button className={classes.button}>
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
};

export default ButtonQuestion;
