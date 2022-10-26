import React from 'react'
import Slide from '../slide/Slide';
import classes from './SliderList.module.css'

const SliderList = (props) => {
    const commentsList = props.commentsList;
    const quantity = props.quantity;
    let loadList = [];

    for (let i = 0; i < quantity; i++) {
        try {
            loadList.push(<Slide commentText={commentsList[i].value} commenAuthor={commentsList[i].author} key={commentsList[i].id} />)
        } catch(error) {
            loadList.push(<Slide commentText='no comment' commenAuthor='' key={Date.no} />)
        }
    }
    return (
        <div className={classes.list}>
            {loadList}
        </div>
    );
};

export default SliderList