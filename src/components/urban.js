import React from "react";
import urban from "../Images/urban.jpg"

function Urban() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={urban}></img>
      </div>
      <div className="right-side">
        <h5>Urban Fashion Home Page</h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          {/* <i className="devicon-javascript-plain colored smallicon"></i> */}
        </div>
        <p>This a Home page built using HTML and CSS, project helped me to revice my basics of CSS. </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://comforting-crepe-e83098.netlify.app/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/Veninagarapu/Home-page-E-commerce-site" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </ div>
  )
}

export default Urban