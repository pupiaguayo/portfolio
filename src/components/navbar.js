import React from "react";
import "./navbar.css";
import * as ReactBootStrap from "react-bootstrap";
import logoPA from "../LogoPA.svg";
function Navbar() {
  return (
    <div className="container">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        className="navbar-edit"
        id="home"
      >
        <ReactBootStrap.Navbar.Brand href="#home" className="navbar-enlaces">
          <img src={logoPA} alt="" />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle-edit"
        />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto nav-edit">
            <ReactBootStrap.Nav.Link href="#descripcion" className="nav-links">
              Sobre mí
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#proyectos" className="nav-links">
              Proyectos
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#skills" className="nav-links">
              Skills
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#contacto" className="nav-links">
              Contacto
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}
export default Navbar;
