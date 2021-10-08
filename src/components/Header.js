import React from "react";
import Buttons from "./Buttons";
import "./Header.css";
import logo from "../../src/assets/images/logo.png";

export default ({ black }) => {
  const details = (black, detail) => {
    if (black) {
      return detail;
    }
  };
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="https://www.nextlevel.app.br/">
          {details(black, <img src={logo}></img>)}
        </a>
      </div>
      <div className="header--user">{details(black, <Buttons />)}</div>
    </header>
  );
};
