import React from "react";
import classes from "./CatalogButton.module.css";

const CatalogButton = (props) => {
  let onClick = props.onClick;
  let text = props.text;
  return (
    <button onClick={onClick} className={classes.button}>
      {text}
    </button>
  );
};

export default CatalogButton;
