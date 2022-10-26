import React from 'react'
import SliderList from '../slider-list/SliderList'

const SliderTab = (props) => {
    const commentsList = props.commentsList.slice(props.initialComment);
    const quantity = props.quantity;
    return (
        <SliderList commentsList={commentsList} quantity={quantity}/>
    )
}

export default SliderTab