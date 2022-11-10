import React, { useState } from "react";
import ButtonPlus from "../../../../../UI/button-plus/ButtonPlus";
import ButtonQuestion from "../../../../../UI/button-question/ButtonQuestion";
import Speachbubble from "../../../../../UI/speachbubble/Speachbubble";
import classes from "./BikeType.module.css";
import Store from "../../../../../store/Store";

const BikeType = (props) => {
  let typeText = props.typeText;
  let type = props.type;
  let srcImage = props.srcImage;
  let price = `${props.price} ADE`;
  let about = props.about;
  let id = props.id;

  let [isAbout, setIsAbout] = useState(false);
  let [chosed, setChosed] = useState(Store.chosenBikeTypes.bikeList[type]);

  function handleAbout() {
    setIsAbout(!isAbout);
  }

  function handlePlus(event) {
    let bikeType = event.target.closest('button').getAttribute('data-biketype')
    Store.chosenBikeTypes.setBikeList(bikeType)
    setChosed(!chosed)
  }


  return (
    <div className={classes.container} id={id}>
      <div className={classes.image}>{srcImage}</div>
      <div className={classes.infoblock}>
        <div className={classes.type}>{typeText}{chosed}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.buttonBlock}>
          <ButtonQuestion onClick={handleAbout} />
          <ButtonPlus chosed={chosed ? true : false} type={type} onClick={handlePlus}/>
        </div>
      </div>
      <Speachbubble isAbout={isAbout} text={about} />
    </div>
  );
};

export default BikeType;
