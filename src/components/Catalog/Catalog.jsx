import React from "react";
import Select from "../rentabike-block/rentform/select/Select";
import { bikesStore } from "../../store/Store";
import Bridge from "../rentabike-block/bridge/Bridge";
import classes from "./Catalog.module.css";
import SelectionResults from "./selection-results/SelectionResults";
import FatButton from "../../UI/fat-button/FatButton";

const Catalog = (props) => {
  if (props.render.length > 0) {
    return (
      <div className={classes.wrapper}>
        <Bridge />
        <div className={classes.container}>
          <div className={classes.select}>
            <Select
              title="Бренд"
              optionList={["все бренды"].concat(bikesStore.getAllBrands())}
              placeholder={"все бренды"}
              selection={props.handleBrand}
            />
          </div>
          <Select
            title="Размер"
            optionList={["все размеры"].concat(bikesStore.getAllSizes())}
            placeholder={"все размеры"}
            selection={props.handleSize}
          />
          <SelectionResults {...props} />
          <FatButton text={"далее"} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Catalog;
