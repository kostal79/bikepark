import React from 'react'
import classes from './FatButton.module.css'

const FatButton = (props) => {
    let onClick = props.onClick;
    let text = props.text;
    return (
        
            <button onClick={onClick} className={classes.button}>{text}</button>
        
    );
};

export default FatButton