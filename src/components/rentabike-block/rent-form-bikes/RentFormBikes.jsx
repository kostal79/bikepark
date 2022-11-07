import React, { useState } from "react";
import ScrollButtonRight from "../../../UI/scroll-button/ScrollButtonRight";
import BikesTypes from "./bikes-types/BikesTypes";
import classes from "./RentFormBikes.module.css";
import BikeImage from "../../../images/bike.png";
import FatButton from "../../../UI/fat-button/FatButton";

let typesList = [
  {
    id: 1,
    srcImage: <img src={BikeImage} alt="bike"></img>,
    type: "Аллюминий",
    price: 90,
    about:
      "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
  },
  {
    id: 2,
    srcImage: <img src={BikeImage} alt="bike"></img>,
    type: "Карбон",
    price: 180,
    about:
      "Легкие и хорошо заглушают вибрацию неровностей. Хорошо подходят для крупных людей – для мало весящих езда будет жесткой.",
  },
  {
    id: 3,
    srcImage: <img src={BikeImage} alt="bike"></img>,
    type: "Горный/городской",
    price: 90,
    about:
      "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
  },

  {
    id: 4,
    srcImage: <img src={BikeImage} alt="bike"></img>,
    type: "Городской эконом",
    price: 45,
    about:
      "Легкие, надежные и легко управляются. Возможны вибрации из-за неровностей дороги.",
  },
];

const RentFormBikes = () => {
  let [currentScroll, setCurrentScroll] = useState(0);

  function handleScroll() {
    let field = document.querySelector(`.${classes.container}`);
    let fieldWidht = field.scrollWidth;
    let screenWidth = window.screen.width;
    let shift = fieldWidht / typesList.length;

    if (field.scrollLeft < fieldWidht - screenWidth) {
      field.scrollLeft = currentScroll + shift;
      setCurrentScroll(currentScroll + shift);
    } else {
      field.scrollLeft = 0;
      setCurrentScroll(0);
    }
  }

  function serchBike() {
    console.log("TODO");
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.head}>
        <h3 className={classes.title}>Тип велосипеда</h3>
        <ScrollButtonRight onClick={handleScroll} />
      </div>
      <div className={classes.container}>
        <BikesTypes typesList={typesList} />
      </div>
      <div className={classes.button}>
        <FatButton text={"найти"} onClick={serchBike} />
      </div>
    </div>
  );
};

export default RentFormBikes;
