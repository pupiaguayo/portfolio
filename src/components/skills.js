import React, { Component } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGit,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
class Skills extends Component {
  render() {
    return (
      <div className="container skills" id="skills">
        <h2>Skills</h2>
        <div className=" container sliderSkills">
          <FontAwesomeIcon icon={faGit} className="iconSkills" />
          <FontAwesomeIcon icon={faHtml5} className="iconSkills" />
          <FontAwesomeIcon icon={faCss3} className="iconSkills" />
          <FontAwesomeIcon icon={faReact} className="iconSkills" />
          <FontAwesomeIcon icon={faJs} className="iconSkills" />
        </div>
      </div>
    );
  }
}
export default Skills;
