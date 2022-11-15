import React from "react";

function GetListFromArray(array) {
    console.log(array)
  let newArray = array.map((item) => {
    return(
         <li>item</li>
    )
  });
  console.log(newArray)
  return newArray;
}

export default GetListFromArray;
