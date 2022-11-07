import React from 'react'
import classes from './Bonuses.module.css'
import Helmet from '../../../images/helmet.png'
import Flashlight from '../../../images/flashlight.png'
import Lock from '../../../images/lock.png'

const Bonuses = () => {
    return (
        <div className={classes.container}>
            <div className={classes.first}>
                <figure className={classes.figure}>
                    <img className={classes.imageHelmet} src={Helmet} alt="helmet" />
                </figure>
                <div className={classes.figcaption}>бесплатно</div>
            </div>
            <div className={classes.second}>
                <figure className={classes.figure}>
                    <img className={classes.imageFlaslight} src={Flashlight} alt="flaslight" />
                </figure>
                <div className={classes.figcaption}>бесплатно</div>
            </div>

            <div className={classes.third}>
                <figure className={classes.figure}>
                    <img className={classes.imageLock} src={Lock} alt="lock" />
                </figure>
                <div className={classes.figcaption}>бесплатно</div>
            </div>
        </div>
    );
};

export default Bonuses