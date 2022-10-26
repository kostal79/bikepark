import React, { useState } from 'react'
import SliderButton from '../../UI/slider-buttons/SliderButton';
import SliderTab from './slider-tab/SliderTab';
import classes from './Slider.module.css'

const Slider = (props) => {
    const commentsList = props.commentsList;
    const [initialComment, setComments] = useState(0)

    function handleInitial(event) {
        let target = event.target;
        let value = target.value;
        let activeButton = document.querySelector('.sliderButton-active');
        activeButton.classList.remove('sliderButton-active')
        target.classList.add('sliderButton-active')
        setComments(value);
    }

    return (
        <div className={classes.slider}>
            <h2 className={classes.title}>Отзывы</h2>
            <div className={classes.mob}><SliderTab commentsList={commentsList} quantity={1} initialComment={initialComment} /></div>
            <div className={classes.tab}><SliderTab commentsList={commentsList} quantity={2} initialComment={initialComment * 2} /></div>
            <div className={classes.desc}><SliderTab commentsList={commentsList} quantity={3} initialComment={initialComment * 3} /></div>
            <div className={classes.buttons}>
                <SliderButton onClick={handleInitial} value={0} active={true}/>
                <SliderButton onClick={handleInitial} value={1}/>
                <SliderButton onClick={handleInitial} value={2}/>
                <SliderButton onClick={handleInitial} value={3}/>
            </div>
        </div>
    );
};

export default Slider