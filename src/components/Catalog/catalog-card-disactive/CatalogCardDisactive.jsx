import React from 'react'
import classes from './CatalogCardDisactive.module.css'

const CatalogCardDisactive = (props) => {
    let item = props.item;

    return (
      <div className={classes.container}>
        <h3 className={classes.title}>
          <div className={classes.size}>{item.size}&#8221;</div>
          <div className={classes.brand}>{item.brand.short}</div>
        </h3>
        <div
          style={{
            backgroundImage: `url(${require(`../../../images/${item.imageName}`)})`,
            width: "260px",
            height: "156px",
            borderRadius: "10px",
            marginBottom: "15px",
            backgroundPosition: "bottom",
            backgroundSize: "cover"
          }}
        ></div>
        <p className={classes.text}>{item.type.text} </p>
        <p className={classes.text}>
          {item.brand.full} {item.size}&#8221;
        </p>
        <div className={classes.price}>{item.price} AED/день</div>
        <div className={classes.footer}>
          <div className={classes.showFreeDate}>Смотреть свободные&nbsp;даты</div>
          <div className={classes.disactiveButton}>занят</div>
        </div>
      </div>
    );
  };

export default CatalogCardDisactive