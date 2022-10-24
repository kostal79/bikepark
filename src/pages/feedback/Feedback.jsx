import React from 'react'
import Comments from '../../components/comments/Comments';
import classes from './Feedback.module.css'

const Feedback = () => {
    return (
        <div className={classes.feedback}>
            <h2 className={classes.title}>Отзывы</h2>
            <Comments />
        </div>
    );
};

export default Feedback