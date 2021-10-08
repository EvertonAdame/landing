import React from "react";
import "./Buttons.css";

const Buttons = ({ size }) => {
  return (
    <div className="featured--buttons" style={{ fontSize: `${size}` }}>
      <a href="" className="featured--watchbutton">
        Entrar
      </a>
      <a href="" className="featured--mylistbutton">
        Cadastrar
      </a>
    </div>
  );
};

export default Buttons;
