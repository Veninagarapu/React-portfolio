import React from "react";
import tflimg from "../Images/smartmockups_l87vy4jl.jpg"
function TFLProject() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={tflimg}></img>
      </div>
      <div className="right-side">
        <h5>London Transport Site </h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
          <i className="devicon-react-original colored smallicon"></i>
        </div>
        <p>{`Created a multipage mobile first React app which utilizes the TFL Unified
API and allows users to plan their journey and to know the live locations of
the stations using google maps.Added a visual depiction of the user's journey, When the user has selected
a journey, display their journey with a line from one station to the next in
the color of that train line. Used React hooks and React router to navigate to different pages.Utilized Bootstrap and Figma to have a user-friendly front end.`}</p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://storied-rabanadas-de7a71.netlify.app/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href=" https://github.com/Veninagarapu/Transport-for-London-App" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </div>
  )
}

export default TFLProject
