import React from "react";
import { useState } from "react";
import Catalog from "../../components/Catalog/Catalog";
import RentabikeBlock from "../../components/rentabike-block/RentabikeBlock";
import Store, { bikesStore } from "../../store/Store";

const Home = () => {
  let [render, setRender] = useState("");

  function handleRender() {
    if (Store.selectSettings().dateFrom && Store.selectSettings().dateTo) {
      let array = bikesStore.store;
      let filteredArray = array.filter((item) => {
        return Store.selectSettings().type.includes(item.type.type);
      });
      setRender(filteredArray);
    } else {
      setRender("");
    }
  }

  return (
    <>
      <RentabikeBlock handleRender={handleRender} />
      <Catalog
        render={render}
        selection={Store.selectSettings()}
        setRender={setRender}
        handleRender={handleRender}
      />
    </>
  );
};

export default Home;
