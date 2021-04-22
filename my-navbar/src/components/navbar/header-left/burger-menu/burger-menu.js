import React from 'react';
import "./burger-menu.css";

function BurgerMenu(props) {
  return (
    <div className="burger-icon">
      <div
        className={props.open ? "burger-icon.open burger-menu" : "burger-menu"}
        onClick={props.click}
      ></div>
    </div>
  );
}

export default BurgerMenu;
