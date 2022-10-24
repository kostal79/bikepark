import React from 'react'
import Clock from './clock/Clock';
import Dropdown from './dropdown/Dropdown';
import classes from './HeaderRightSide.module.css'

const HeaderRightSide = () => {
    return (
        <div className={classes.block}>
            <Clock />
            <Dropdown />
        </div>
    );
};

export default HeaderRightSide