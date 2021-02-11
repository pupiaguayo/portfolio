import React, { Component } from "react";
import "./proyectos.css";
import ProyectosCards from "./proyectos-cards.js";
class Proyectos extends Component {
  state = {
    Proyectos: [
      {
        name: "Patitas",
        tecnologias: "HTML, CSS, Javascript, Node JS, Firebase",
        img: "https://i.ibb.co/KN9rGcD/Patitas.jpg",
        url: "https://patitas.me/",
        urlHistoria:
          "https://collectednotes.com/pupiaguayo/como-se-creo-patitas",
      },
      {
        name: "Dolaunch",
        tecnologias: "HTML, CSS, Javascript, Firebase",
        img: "https://i.ibb.co/DMBC7cn/Dolaunch.jpg",
        url: "https://dolaunch1.web.app/",
        urlHistoria:
          "https://collectednotes.com/pupiaguayo/como-se-creo-dolaunch",
      },
      {
        name: "Pokedex",
        tecnologias: "React JS, CSS, Firebase",
        img: "https://i.ibb.co/xYxg6Sy/pokedex.jpg",
        url: "https://pokeapp9.web.app/",
        urlHistoria:
          "https://collectednotes.com/pupiaguayo/como-se-creo-pokedex",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid container-proyectos" id="proyectos">
          <h2>Proyectos</h2>
          <div className="proyectos-row">
            {this.state.Proyectos.map((item, i) => {
              return (
                <ProyectosCards
                  img={item.img}
                  title={item.name}
                  tecnologias={item.tecnologias}
                  url={item.url}
                  urlHistoria={item.urlHistoria}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Proyectos;
