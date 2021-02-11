import React, { Component } from "react";
import "./proyectos-cards.css";
class ProyectosCards extends Component {
  render() {
    return (
      <div className="conten-tarjeta">
        <a href={this.props.url}>
          <div className="tarjeta">
            <img src={this.props.img} alt="" />
            <div className="descripcion-card">
              <h1>{this.props.title}</h1>
              <p>
                <span>Stack:</span> {this.props.tecnologias}
              </p>
            </div>
          </div>
        </a>
        <div className="button-url">
          <a href={this.props.urlHistoria}>
            <button className="buttonContacto">
              ¿Cómo se creó {this.props.title}?
            </button>
          </a>
        </div>
      </div>
    );
  }
}
export default ProyectosCards;
