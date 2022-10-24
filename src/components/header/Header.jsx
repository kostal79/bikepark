import React from "react";
import HeaderLeftSide from "./header_left_side/HeaderLeftSide";
import HeaderRidhtSide from "./header_right_side/HeaderRightSide";
import classes from './Header.module.css'

const Header = () => {

  return (
    <header className={classes.header}>
      <HeaderLeftSide />
      <HeaderRidhtSide />
    </header>
  )
}

export default Header