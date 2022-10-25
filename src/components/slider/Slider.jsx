import React from 'react'
import SliderMob from './slider-mob/SliderMob';
import classes from './Slider.module.css'

const Slider = (props) => {
    const commentsList = props.commentsList;
    return (
        <div className={classes.slider}>
            <h2 className={classes.title}>Отзывы</h2>
            <SliderMob commentsList={commentsList}/>
            <div>sliderTab</div>
            <div>sliderDesc</div>
        </div>
    );
};

export default Slider