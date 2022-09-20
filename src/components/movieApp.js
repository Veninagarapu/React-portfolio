import React from "react";
import movie from "../Images/movie.jpg"

function MovieAppProject() {
  return (
    <div className="project-container">
      <div className="left-side">
        <img className="project-preview-img" src={movie}></img>
      </div>
      <div className="right-side">
        <h5>Movie App (using TMDB API) </h5>
        <div className="technologies-used">
          <i className="devicon-html5-plain colored smallicon"></i>
          <i className="devicon-css3-plain colored smallicon"></i>
          <i className="devicon-javascript-plain colored smallicon"></i>
          <i className="devicon-react-original colored smallicon"></i>
          {/* <i className="devicon-tailwindcss-plain colored smallicon"></i>
          <i className="devicon-python-plain colored smallicon"></i>
          <i className="devicon-postgresql-plain colored smallicon"></i>
          <i className="devicon-flask-original colored smallicon"></i>
          <i className="devicon-jira-plain-wordmark colored smallicon"></i> */}
        </div>
        <p>{"This React project will provide the list of upcoming, popular & top-rated movies. On clicking on any movie, it will show us the detail page of the movie. This React app also have a carousel at the top for displaying movies as hero banner.Used react params for dynamic routing.  "}
        </p>
        <div className="link-buttons-container">
          <button className="portfolio-link"><a href="https://lighthearted-dusk-707351.netlify.app/" rel="noreferrer" id="mfs-modal" target="_blank">Live site</a></button>
          <button className="portfolio-link"><a href="https://github.com/Veninagarapu/Movieapp " rel="noreferrer" target="_blank">Github Repository</a></button>
        </div>
      </div>
    </div>
  )
}

export default MovieAppProject;