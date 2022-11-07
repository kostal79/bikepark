import React from 'react'
import Bonuses from './bonuses/Bonuses';
import Bridge from './bridge/Bridge';
import RentFormBikes from './rent-form-bikes/RentFormBikes';
import classes from './RentabikeBlock.module.css'
import Rentform from './rentform/Rentform';


const RentabikeBlock = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.title}>Аренда велосипедов с&nbsp;доставкой</div>
                <Bonuses />
                <Rentform />
            </div>
            <Bridge />
            <RentFormBikes />
        </>
    );
};

export default RentabikeBlock