import React, { useState } from "react";
import Bonuses from "./bonuses/Bonuses";
import Bridge from "./bridge/Bridge";
import RentFormBikes from "./rent-form-bikes/RentFormBikes";
import classes from "./RentabikeBlock.module.css";
import Rentform from "./rentform/Rentform";
import Store from "../../store/Store";
import BikeType from "./rent-form-bikes/bikes-types/bike-type/BikeType";

const RentabikeBlock = (props) => {
  let [calendarIsActive, setCalendarIsActive] = useState(false);

  function showCalendar() {
    setCalendarIsActive(!calendarIsActive);
  }

  let [periodStart, setPeriodStart] = useState(Store.calendar.from);
  let [periodFinish, setPeriodFinish] = useState(Store.calendar.to);
  let [timeStart, setTimeStart] = useState(0);
  let [timeFinish, setTimeFinish] = useState(0);
  let [clicked, setClick] = useState(false);
  const currentDate = new Date();

  //Date setting

  function getStart(date) {
    if (!periodStart) {
      let dateValue = date.valueOf();
      let newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      );
      if (dateValue >= newDate) {
        setPeriodFinish(dateValue);
        Store.calendar.to = date;
        setPeriodStart(dateValue);
        Store.calendar.from = date;
        setClick(!clicked);
      }
    } else {
      setPeriodStart(null);
      Store.calendar.from = null;
      Store.calendar.timeFrom = null;
      setPeriodFinish(null);
      Store.calendar.to = null;
      Store.calendar.timeTo = null;
    }
  }

  function getFinish(date) {
    let dateValue = date.valueOf();
    if (dateValue >= periodStart) {
      setPeriodFinish(dateValue);
      Store.calendar.to = date;
      setClick(!clicked);
    }
  }

  //Time setting

  function setTimeFrom(value) {
    Store.calendar.timeFrom = value;
  }

  function setTimeTo(value) {
    Store.calendar.timeTo = value;
  }

  function handleTimeStart(event) {
    setTimeStart(event.target.value);
    Store.calendar.timeFrom = event.target.value;
  }

  function handleTimeFinish(event) {
    setTimeFinish(event.target.value);
    Store.calendar.timeTo = event.target.value;
  }


  //bikes


  let typesList = Store.bikeTypesList;


  function bikeTypeList(list) {
      let result = list.map((item) => {
          return (
                  <BikeType
                  id={item.id}
                  srcImage={item.srcImage}
                  typeText={item.type.text}
                  type={item.type.type}
                  price={item.price}
                  about={item.about}
                  key={item.id}
                  />
          )
      })
      return result;
  }

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.title}>Аренда велосипедов с&nbsp;доставкой</div>
        <Bonuses />
        <Rentform
          getStart={getStart}
          getFinish={getFinish}
          setTimeFrom={setTimeFrom}
          setTimeTo={setTimeTo}
          month={currentDate.getMonth()}
          clicked={clicked}
          periodStart={periodStart}
          periodFinish={periodFinish}
          timeStart={timeStart}
          timeFinish={timeFinish}
          handleTimeStart={handleTimeStart}
          handleTimeFinish={handleTimeFinish}
          placeholder={Store.delivery.type}
          optionList={Store.delivery.optionList}
          showCalendar={showCalendar}
          calendarIsActive={calendarIsActive}
        />
      </div>
      <Bridge />
      <RentFormBikes
      typesList={typesList}
      bikeTypeList={bikeTypeList}
      handleRender={props.handleRender}
      />
    </>
  );
};

export default RentabikeBlock;
