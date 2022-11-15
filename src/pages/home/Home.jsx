import React from "react";
import { useState, useEffect } from "react";
import Catalog from "../../components/Catalog/Catalog";
import RentabikeBlock from "../../components/rentabike-block/RentabikeBlock";
import Store, { bikesStore } from "../../store/Store";

const Home = () => {
  let [render, setRender] = useState("");
  let [filteredSelection, setFilteredSelection] = useState(render);
  let [brend, setBrend] = useState("все бренды");
  let [size, setSize] = useState("все размеры");

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

  useEffect(() => {
    if (brend !== "все бренды" && size !== "все размеры") {
      let sortedArray = Array.from(render).filter((item) => {
        return item.brand.short === brend && item.size === Number(size);
      });
      setFilteredSelection(sortedArray);
    } else if (brend !== "все бренды" && size === "все размеры") {
      let sortedArray = Array.from(render).filter((item) => {
        return item.brand.short === brend;
      });
      setFilteredSelection(sortedArray);
    } else if (brend === "все бренды" && size !== "все размеры") {
      let sortedArray = Array.from(render).filter((item) => {
        return item.size === Number(size);
      });
      setFilteredSelection(sortedArray);
    } else {
      setFilteredSelection(Array.from(render));
    }
  }, [brend, size, render]);

  function handleBrand(value) {
    setBrend(value);
  }

  function handleSize(value) {
    setSize(value);
  }

  return (
    <>
      <RentabikeBlock handleRender={handleRender} />

      <Catalog
        render={render}
        filteredSelection={filteredSelection}
        selection={Store.selectSettings()}
        handleRender={handleRender}
        handleBrand={handleBrand}
        handleSize={handleSize}
      />
    </>
  );
};

export default Home;
