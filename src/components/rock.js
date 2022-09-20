import React from "react";
import rock from "../Images/rock.jpg"

function Rock() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={rock}></img>
      </div>
      <div className="right-side">
        <h5>Rock Paper Scissors Game</h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
        </div>
        <p>My first game project. Built using HTML, CSS and JavaScript, with 2 players one is user and other is computer itself with a automatic image slider. As soon as the user picks a card it displays the result of both palyers.</p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://delightful-banoffee-ea4ed7.netlify.app/" rel="noreferrer" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/Veninagarapu/Rock-Paper-Scissors-game" rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </ div>
  )
}

export default Rock