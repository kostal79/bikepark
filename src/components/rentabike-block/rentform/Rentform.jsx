import React from "react";
import CalendarBlock from "../../calendar-block/CalendarBlock";
import RentType from "./rent-type/RentType";
import SelectDate from "./select-date/SelectDate";
import classes from "./RentForm.module.css";
import Select from "./select/Select";
import Store from "../../../store/Store";
import GetDateFromString from "../../../utils/GetDateFromString";

const Rentform = (props) => {
  return (
    <div>
      <RentType />
      <SelectDate
        title="Дата и время начала"
        date={
          Store.calendar.from
            ? GetDateFromString(`${Store.calendar.from}`)
            : "Выберите дату"
        }
        time={Store.calendar.timeFrom ? Store.calendar.timeFrom : ""}
        action={props.showCalendar}
      />
      <SelectDate
        title="Дата и время конца"
        date={
          Store.calendar.to
            ? GetDateFromString(`${Store.calendar.to}`)
            : "Выберите дату"
        }
        time={Store.calendar.timeTo ? Store.calendar.timeTo : ""}
        action={props.showCalendar}
      />
      <div
        className={
          props.calendarIsActive ? classes.calendarActive : classes.calendarInactive
        }
      >
        <CalendarBlock {...props} />
      </div>
      <Select {...props} title="Доставка" />
    </div>
  );
};

export default Rentform;
