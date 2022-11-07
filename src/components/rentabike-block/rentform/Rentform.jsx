import React, { useState } from 'react'
import CalendarBlock from '../../calendar-block/CalendarBlock';
import RentType from './rent-type/RentType';
import SelectDate from './select-date/SelectDate';
import classes from './RentForm.module.css'
import Select from './select/Select';


const Rentform = () => {
    let [calendarIsActive, setCalendarIsActive] = useState(false)

    function showCalendar() {
        setCalendarIsActive(!calendarIsActive)
    }
    
    return (
        <div>
            <RentType />
            <SelectDate
                title='Дата и время начала'
                date='24.07.21'
                time='12:00'
                action={showCalendar} />
            <SelectDate
                title='Дата и время конца'
                date='24.07.21'
                time='12:00'
                action={showCalendar} />
            <div className={calendarIsActive ? classes.calendarActive : classes.calendarInactive}><CalendarBlock /></div>
            <Select
                title='Доставка'
                optionList={[
                    { value: 'by address', text: 'На адрес' },
                    { value: 'bymyself', text: 'самовывоз' }
                ]}
            />
        </div>
    );
};

export default Rentform