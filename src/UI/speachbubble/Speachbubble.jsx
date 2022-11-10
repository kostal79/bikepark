import React from "react";
import classes from "./Speachbubble.module.css";

const Speachbubble = (props) => {
  let text = props.text;
  let isAbout = props.isAbout;
  return (
    <div className={isAbout ? classes.aboutActive : classes.about}>
        <div className={classes.square}></div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};

export default Speachbubble;
