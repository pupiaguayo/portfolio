import React, { Component } from "react";
import "./container-init.css";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ContainerInit extends Component {
  render() {
    return (
      <div className="containerInit">
        <div className="containerDescription" id="descripcion">
          <h1>¡Hola! Mi nombre es Rubén Aguayo</h1>
          <h4>
            Soy desarrollador frontend y vivo en Corrientes, Argentina. Me gusta
            aprender constantemente nuevas tecnologías y utilizarlas para crear
            soluciones sencillas y efectivas.
          </h4>
          <div className="redes">
            <a href="https://github.com/pupiaguayo">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://instagram.com/pupiaguayo">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="https://twitter.com/pupiaguayo">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            <a href="https://linkedin.com/in/rdaguayo">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default ContainerInit;
