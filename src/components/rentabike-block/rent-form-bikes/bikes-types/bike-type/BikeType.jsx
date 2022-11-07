import React from "react";
import ButtonPlus from "../../../../../UI/button-plus/ButtonPlus";
import ButtonQuestion from "../../../../../UI/button-question/ButtonQuestion";
import classes from "./BikeType.module.css";

const BikeType = (props) => {
  let type = props.type;
  let srcImage = props.srcImage;
  let price = `${props.price} ADE`;
  let about = props.about;
  let id = props.id;

  return (
    <div className={classes.container} id={id}>
      <div className={classes.image}>{srcImage}</div>
      <div className={classes.infoblock}>
        <div className={classes.type}>{type}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.buttonBlock}>
          <ButtonPlus />
          <ButtonQuestion />
          <div className={classes.about}>{about}</div>
        </div>
      </div>
    </div>
  );
};

export default BikeType;
