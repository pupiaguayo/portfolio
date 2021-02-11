import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import ContainerInit from "./components/container-init.js";
import Proyectos from "./components/proyectos.js";
import Skills from "./components/skills.js";
import Contacto from "./components/contacto.js";
import Footer from "./components/footer.js";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ContainerInit />
        <Proyectos />
        <Skills />
        <Contacto />
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
