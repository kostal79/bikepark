import React, { useState } from "react";

const SelectWrapper = (OriginalComponent) => {
  function NewComponent(props) {
    let [selectIsActive, setSelectIsActive] = useState(false);
    let [placeholder, setPlaceholder] = useState(
      props.placeholder || "select placeholder"
    );
    function handleSelect() {
      setSelectIsActive(!selectIsActive);
    }

    function handlePlaceholder(event) {
      setPlaceholder(event.target.innerText);
      setSelectIsActive(false);
      props.selection(event.target.innerText);
    }
    return (
      <OriginalComponent
        {...props}
        selectIsActive={selectIsActive}
        placeholder={placeholder}
        handlePlaceholder={handlePlaceholder}
        handleSelect={handleSelect}
      />
    );
  }
  return NewComponent;
};

export default SelectWrapper;
