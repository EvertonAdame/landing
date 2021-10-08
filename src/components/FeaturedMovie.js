import React from "react";
import "./FeaturedMovie.css";
import background from "../../src/assets/images/1.png";
import logo from "../../src/assets/images/logo.png";
import Buttons from "./Buttons.js";
import title from "../../src/assets/images/title.png";

export default () => {

  return (
    <section
      className="featured"
      style={{
        backgroudSize: "cover",
        backgroundPosition: "right",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div style={{ backgroundImage: `url(${logo})` }}></div>

      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--title">
            <img src={title}></img>
          </div>

          <div className="featured--description">
            Conheça a plataforma NextLevel
            <br></br>
            Aqui você terá acesso a diversos cursos produzidos por
            profissionais.
            <br></br>
            Cursos livres, eventos e aulas gravadas nas mais diversas áreas do
            conhecimento.
          </div>

          <Buttons size={"25px"} />
        </div>
      </div>
    </section>
  );
};
