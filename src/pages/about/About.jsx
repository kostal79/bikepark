import React from 'react'
import AboutArticle from '../../components/about-article/AboutArticle'
import Feedback from '../feedback/Feedback';
import classes from './About.module.css'

const About = () => {
    return (
        <div className={classes.container}>
           <AboutArticle />
           <Feedback />
        </div>
    );
};

export default About