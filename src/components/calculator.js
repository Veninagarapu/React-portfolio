import React from "react";
import calculator from "../Images/calculator.jpg"

function Calculator() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={calculator}></img>
      </div>
      <div className="right-side">
        <h5>Calculator</h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
        </div>
        <p>A simple calculator built using HTML, CSS and JavaScript. </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://magenta-snickerdoodle-edf4cf.netlify.app/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/Veninagarapu/Calculator" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </ div>
  )
}

export default Calculator