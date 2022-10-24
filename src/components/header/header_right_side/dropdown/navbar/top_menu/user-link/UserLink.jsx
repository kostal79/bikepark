import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './UserLink.module.css'

const UserLink = () => {
    return (
        <div className={classes.text}>
            <NavLink className={classes.enter} to={"/user"}><span>Личный кабинет</span></NavLink>
            <NavLink className={classes.exit} to={"/"}><span>Выйти</span></NavLink>
        </div>
    );
};

export default UserLink