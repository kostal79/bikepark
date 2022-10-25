import React from 'react'
import AboutArticle from '../../components/about-article/AboutArticle'
import Slider from '../../components/slider/Slider';
import classes from './About.module.css'

const About = (props) => {
    const commentsList = props.commentsList;
    return (
        <div className={classes.container}>
            <AboutArticle />
            <Slider commentsList={commentsList} />
        </div>
    );
};

export default About