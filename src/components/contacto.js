import React, { Component } from "react";
import "./contacto.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Contacto extends Component {
  render() {
    return (
      <div className="container contacto" id="contacto">
        <h2>Contacto</h2>
        <div className=" container elementosContacto">
          <div className="iconosContacto">
            <a href="https://api.whatsapp.com/send?phone=543794991421&text=Hola">
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
            <a href="mailto:pupaguayo@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </a>
          </div>
          <div className="buttonContacto">
            <a href="https://drive.google.com/file/d/1WGy4rINj1kCdVJbHoy0ithWfRkOyRlxb/view?usp=sharing">
              <button>Descargar mi CV</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Contacto;
