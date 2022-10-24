import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MenuList.module.css';

const MenuList = (props) => {
    return (
        <ul className={classes.list}>
            <li className={classes.item}><NavLink to="/about">О нас</NavLink></li>
            <li className={classes.item}><NavLink to="/">Аренда</NavLink></li>
            <li className={classes.item}><NavLink to="/delivery">Доставка</NavLink></li>
            <li className={classes.item}><NavLink to="/wheretoride">Где кататься</NavLink></li>
            <li className={classes.item}><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>
    );
};

export default MenuList