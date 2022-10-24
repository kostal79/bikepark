import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './FooterLinks.module.css'

const FooterLinks = () => {
    return (
        <ul className={classes.list}>
            <li className={classes.item}><NavLink to="/rules">Правила</NavLink></li>
            <li className={classes.item}><NavLink to="/reviews">Отзывы</NavLink></li>
            <li className={classes.item}><NavLink to="/contacts">Контакты</NavLink></li>
            <li className={classes.item}><NavLink to="/feedback">Обратная связь</NavLink></li>
        </ul>
    );
};

export default FooterLinks