import React from 'react'
import BikeType from './bike-type/BikeType';
import classes from './BikesTypes.module.css'



const BikeTypes = (props) => {
    let typesList = props.typesList;
    function bikeTypeList(list) {
        let result = list.map((item) => {
            return (
                    <BikeType id={item.id} srcImage={item.srcImage} type={item.type} price={item.price} about={item.about} key={item.id}/>
            )
        })
        return result;
    }
    return (
        <div className={classes.container}>
            {bikeTypeList(typesList)}
        </div>
    );
};

export default BikeTypes