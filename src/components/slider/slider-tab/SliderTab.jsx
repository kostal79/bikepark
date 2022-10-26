import React from 'react'
import SliderList from '../slider-list/SliderList'

const SliderTab = (props) => {

    const quantity = props.quantity;
    const commentsList = props.commentsList.slice(props.initialComment);

    return (
        <SliderList commentsList={commentsList} quantity={quantity}/>
    )
}

export default SliderTab