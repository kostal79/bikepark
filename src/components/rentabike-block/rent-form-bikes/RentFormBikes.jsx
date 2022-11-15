import React, { useState } from "react";
import ScrollButtonRight from "../../../UI/scroll-button/ScrollButtonRight";
import BikesTypes from "./bikes-types/BikesTypes";
import classes from "./RentFormBikes.module.css";
import FatButton from "../../../UI/fat-button/FatButton";

const RentFormBikes = (props) => {
  let [currentScroll, setCurrentScroll] = useState(0);

  function handleScroll() {
    let field = document.querySelector(`.${classes.container}`);
    let fieldWidht = field.scrollWidth;
    let screenWidth = window.screen.width;
    let shift = fieldWidht / props.typesList.length;

    if (field.scrollLeft < fieldWidht - screenWidth) {
      field.scrollLeft = currentScroll + shift;
      setCurrentScroll(currentScroll + shift);
    } else {
      field.scrollLeft = 0;
      setCurrentScroll(0);
    }
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <h3 className={classes.title}>Тип велосипеда</h3>
        <ScrollButtonRight onClick={handleScroll} />
      </div>
      <div className={classes.container}>
        <BikesTypes {...props} />
      </div>
      <div className={classes.button}>
        <FatButton text={"найти"} onClick={props.handleRender} />
      </div>
    </div>
  );
};

export default RentFormBikes;
