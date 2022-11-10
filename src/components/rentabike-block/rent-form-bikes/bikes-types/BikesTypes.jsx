import React from "react";
import classes from "./BikesTypes.module.css";

const BikeTypes = (props) => {
  return (
    <div className={classes.container}>
      {props.bikeTypeList(props.typesList)}
    </div>
  );
};

export default BikeTypes;
