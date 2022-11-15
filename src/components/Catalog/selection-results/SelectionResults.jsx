import React from "react";
import CatalogCardActive from "../catalog-card-active/CatalogCard";
import classes from "./SelectionResults.module.css";
import CheckDate from "../../../utils/CheckDate";
import CatalogCardDisactive from "../catalog-card-disactive/CatalogCardDisactive";

const SelectionResults = (props) => {
  let selection = props.selection;

  function renderSelection(array) {
    let result = array.map((item) => {
      if (
        CheckDate(
          selection.dateFrom,
          selection.dateTo,
          item.reservedFrom,
          item.reservedTo
        )
      ) {
        return <CatalogCardActive item={item} key={item.id} />;
      } else {
        return <CatalogCardDisactive item={item} key={item.id} />;
      }
    });
    return result;
  }
  return (
    <div className={classes.container}>{renderSelection(props.render)}</div>
  );
};

export default SelectionResults;
