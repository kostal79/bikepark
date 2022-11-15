import React from "react";
import Select from "../rentabike-block/rentform/select/Select";
import { bikesStore } from "../../store/Store";
import Bridge from "../rentabike-block/bridge/Bridge";
import classes from "./Catalog.module.css";
import SelectionResults from "./selection-results/SelectionResults";

const Catalog = (props) => {
  if (props.render) {
    return (
      <div className={classes.wrapper}>
        <Bridge />
        <div className={classes.container}>
          <div className={classes.select}>
            <Select
              title="Бренд"
              optionList={["все бренды"].concat(bikesStore.getAllBrands())}
              placeholder={"все бренды"}
              selection={(value) => {
                if (value !== "все бренды") {
                  props.handleRender();
                  let sortedArray = props.render.filter((item) => {
                    return item.brand.short === value;
                  });
                  props.setRender(sortedArray);
                } else {
                  props.handleRender();
                }
              }}
            />
          </div>
          <Select
            title="Размер"
            optionList={["все размеры"].concat(bikesStore.getAllSizes())}
            placeholder={"все размеры"}
            selection={(value) => {
              if (value !== "все размеры") {
                props.handleRender();
                let sortedArray = props.render.filter((item) => {
                  return item.size === Number(value);
                });
                props.setRender(sortedArray);
              } else {
                props.handleRender();
              }
            }}
          />
          <SelectionResults {...props} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Catalog;
