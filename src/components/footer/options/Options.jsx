import React from 'react'
import OptionList from './option-list/OptionList';
import classes from './Options.module.css'

const Options = () => {
    return (
        <>
            <h5 className={classes.title}>Аренда велосипедов</h5>
            <OptionList />
        </>
    );
};

export default Options