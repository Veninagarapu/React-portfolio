import React from "react";
import codeimage from "../Images/smartmockups_l87v8wky.jpg"

function EcommerceProject() {
  return ( <>
    <div className="project-container-current">
      <div className="left-side">
        <img className="project-preview-img" src={codeimage}></img>
      </div>
      <div className="right-side">
        <h5>E-commerce Site (In Development)</h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
          {/* <i className="devicon-react-original colored smallicon"></i>
          <i className="devicon-nodejs-plain colored smallicon"></i>
          <i className="devicon-mongodb-plain colored smallicon"></i>
          <i className="devicon-express-original colored smallicon"></i>
          <i className="devicon-sass-original colored smallicon"></i>
          <i className="devicon-jira-plain-wordmark colored smallicon"></i> */}
        </div>
        <p><b>Current stage:</b> Updating Cart items</p>

        <p>This Project is a multipage website, with a home page, product details page, and a Cart page,Utilized HTML, CSS and JavaScript to have a user-friendly front end. Added all the products into the page using JavaScript which makes code simpler and more readable. Added a Hero sction with a image sliders to make the page more appealing to customers. Implementing features like Dynamic Cart, and display Update, Delete and Checkout. 
         
        </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://transcendent-vacherin-a08fb1.netlify.app/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/Veninagarapu/E-commerce " rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </div>
    {/* <div className="project-updates">
      <h5>Project Updates</h5>
      <div className="update container">
        <p>28th August 2022</p>
      </div>
    </div> */}
  </>
  )
}

export default EcommerceProject