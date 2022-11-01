import React, { useContext, useEffect, useState } from 'react'
import Month from './month/Month';
import classes from './Calendar.module.css'
import { YearContext } from '../../../context';

const Calendar = (props) => {

    let currentTime = new Date();
    let month = props.month;

    const { currentYear, setCurrentYear } = useContext(YearContext);
    const [currentMonth, setMonth] = useState(month);

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']


    const [time, setTime] = useState(currentTime.toLocaleTimeString('ru-Ru', { hour: '2-digit', minute: '2-digit' }))
    const [currentArr, setArr] = useState([])


    function getWeekDay(date) {
        let day = date.getDay();
        day = (day === 0) ? 6 : day - 1;
        return day;
    }




    useEffect(() => {
        function datesArray() {
            let arr = [];
            let date = new Date(currentYear, currentMonth);

            for (let i = 0; i < getWeekDay(date); i++) {
                let prevDate = new Date(currentYear, currentMonth, date.getDate() - getWeekDay(date) + i);
                arr.push(prevDate)
            }

            while (date.getMonth() === currentMonth) {
                arr.push(date)
                let nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
                date = nextDay;
            }

            if (getWeekDay(date) !== 0) {
                let newDate = 1;
                for (let i = getWeekDay(date); i < 7; i++) {
                    let nextDate = new Date(currentYear, currentMonth + 1, newDate++);
                    arr.push(nextDate);
                }
            }
            return arr
        }
        setArr(datesArray())
    }, [currentMonth, currentYear])

    function nextMonth() {

        if (currentMonth === 11) {
            setMonth(0);
            setCurrentYear(currentYear + 1)
        } else {
            setMonth(currentMonth + 1);
        }
    }

    function prevMonth() {
        if (currentMonth === 0) {
            setMonth(11);
            setCurrentYear(currentYear - 1)
        } else {
            setMonth(currentMonth - 1);
        }
    }

    function handleTime(event) {
        setTime(event.target.value)
    }

    return (
        <div className={classes.calendar}>
            <Month
                monthName={months[currentMonth]}
                currentMonth={currentMonth}
                currentArr={currentArr}
                month={months[currentMonth]}
                nextMonth={nextMonth}
                prevMonth={prevMonth}
                handleTime={handleTime}
                time={time}
                {...props}
            />
        </div>

    );
};

export default Calendar