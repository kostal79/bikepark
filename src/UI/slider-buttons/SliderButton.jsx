import React from 'react'
import './SliderButton.css'

const SliderButton = (props) => {
    let value = props.value;
    let active = props.active;
    let className = active ? 'sliderButton sliderButton-active' : 'sliderButton'
    return (
        <button className={className} value={value} onClick={props.onClick} >

        </button>
    );
};

export default SliderButton