import React from "react";
import classes from "./Select.module.css";
import SelectWrapper from "./SelectWrapper";

const Select = ({
  title,
  optionList,
  handleSelect,
  handlePlaceholder,
  placeholder,
  selectIsActive,
}) => {
  function getOptions(arr) {
    let result = arr.map((item) => (
      <li
        className={classes.text}
        key={item.value || item}
        value={item.value || item}
        onClick={handlePlaceholder}
      >
        {item.text || item}
      </li>
    ));
    return result;
  }

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>{title}</p>
      <div className={classes.container} onClick={handleSelect}>
        <div className={classes.placeholder}>
          <p className={classes.text}>{placeholder}</p>
        </div>
        <div className={classes.button}>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.999451 1L5.99945 6L10.9995 1"
              stroke="#14233D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul
          className={
            selectIsActive ? classes.selectionActive : classes.selectionInactive
          }
        >
          {getOptions(optionList)}
        </ul>
      </div>
    </div>
  );
};

export default SelectWrapper(Select);
