import React from 'react'
import classes from './Slide.module.css'

const Slide = (props) => {
    let commentText = props.commentText;
    const commenAuthor = props.commenAuthor;

    commentText = commentText.length > 180 ? commentText.slice(0, 177) + "..." : commentText;
    return (
        <div className={classes.slider}>
            <p className={classes.text}>{commentText}</p>
            <div className={classes.author}>
                <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 0H8.33333L5.83333 15H0L2.5 0Z" fill="#297FFF" />
                    <path d="M12.5 0H18.3333L15.8333 15H10L12.5 0Z" fill="#297FFF" />
                </svg>
                {commenAuthor}
            </div>
        </div>
    );
}

export default Slide