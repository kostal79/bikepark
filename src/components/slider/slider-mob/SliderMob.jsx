import React, { useState } from 'react'
import SliderButton from '../../../UI/slider-buttons/SliderButton';
import classes from './SliderMob.module.css'

const SliderMob = (props) => {

    const commentsList = props.commentsList;
    let [currentComment, setCurrentComment] = useState(commentsList[0].value);
    let [currentAuthor, setCurrentAuthor] = useState(commentsList[0].author);

    let comment = currentComment.length > 170 ? currentComment.slice(0, 167) + "..." : currentComment;

    function changeCurrentComment(event) {
        let target = event.target;
        let ind = target.value;
        let activeButton = document.querySelector('.sliderButton-active');
        activeButton.classList.remove('sliderButton-active')
        target.classList.add('sliderButton-active')

        setCurrentComment(commentsList[ind].value)
        setCurrentAuthor(commentsList[ind].author)
    }

    return (
        <div className={classes.container}>
            <div className={classes.slider}>
                <p className={classes.text}>{comment}</p>
                <div className={classes.author}>
                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 0H8.33333L5.83333 15H0L2.5 0Z" fill="#297FFF" />
                        <path d="M12.5 0H18.3333L15.8333 15H10L12.5 0Z" fill="#297FFF" />
                    </svg>
                    {currentAuthor}
                </div>
            </div>
            <div className={classes.buttons}>
                <SliderButton onClick={changeCurrentComment} value={0} active={true} />
                <SliderButton onClick={changeCurrentComment} value={1} />
                <SliderButton onClick={changeCurrentComment} value={2} />
                <SliderButton onClick={changeCurrentComment} value={3} />
            </div>
        </div>
    );
};

export default SliderMob