import React from "react";
import { useState } from "react";
import TFLProject from "./components/tflapp.js";
import MovieAppProject from "./components/movieApp.js";
import Calculator from "./components/calculator.js";
import EcommerceProject from "./components/e-commerce.js";
import Rock from "./components/rock.js";
import Urban from "./components/urban.js";

function App() {
  const [projecttype, setprojecttype] = useState("current");

  function toggleclick(e) {
    console.log(e.target.value);
    setprojecttype(e.target.value);
    console.log(projecttype);
  }

  return (
    <div>
      {/* N A V B A R */}
      <nav>
        <div className="logo">k--</div>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#experience">Education</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>

      {/* H E R O   S E C T I O N */}
      <header className="header">
        <div className="title-container">
          <div className="title">
            <h1>Krishna Nagarapu</h1>
            <p>Front End Developer </p>
            <div className="button">
              <a href="#about">
                <p>About me</p>
              </a>
            </div>
          </div>

          <div className="logo-container">
            <a
              className="link-icon"
              href="https://github.com/Veninagarapu"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github fa-2x links"></i>
            </a>
            <a
              className="link-icon"
              href="https://www.linkedin.com/in/krishnaveni-nagarapu-b49375137/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin fa-2x links"></i>
            </a>
          </div>
        </div>
      </header>

      {/* A B O U T   M E */}
      <section className="about" id="about">
        <div className="about-me-container">
          <div className="info">
            <h2>About me</h2>
            <p className="bio">{` I am a passionate Web Developer with a Master's degree in Structural Engineering.
            To kick start my career into tech, I spent tremendous amount of time in learning 
                          code, practicing and improving myself. I remember the feeling of creating my
                          own first web page that I never imagined I would do. My zeal towards my dream
                          job of becoming a Web developer made me to learn Html, CSS, Bootstrap,
                          JavaScript, React and Git. With the knowledge acquired I started creating
                          responsive web pages.
                          <br/>
                          Recently Graduated from an intensive Web Developer boot camp from Bath Spa
                          University.
                          <br/>
                          Seeking for an entry-level position to use my knowledge and skills in coding with
                          an organization where I can grow and make a mark on my career as well as the
                          Company.`}</p>
          </div>
          <div className="image">
            <img
              className="krish-photo"
              src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg"
            ></img>
          </div>
        </div>

        <div className="skillsdiv">
          <h5 className="skilltitle">Technical skills</h5>
          <div className="skills">
            <div className="icon-container">
              <i className="devicon-html5-plain colored bigicon"></i>
              <p>HTML</p>
            </div>
            <div className="icon-container">
              <i className="devicon-css3-plain colored bigicon"></i>
              <p>CSS</p>
            </div>
            <div className="icon-container">
              <i className="devicon-javascript-plain colored bigicon"></i>
              <p>JavaScript</p>
            </div>
            <div className="icon-container">
              <i className="devicon-react-original colored bigicon"></i>
              <p>React</p>
            </div>
            {/* <div className="icon-container"><i className="devicon-nodejs-plain colored bigicon"></i><p>Node JS</p></div>
          <div className="icon-container"><i className="devicon-mongodb-plain colored bigicon"></i><p>Mongo Db</p></div>
          <div className="icon-container"><i className="devicon-express-original colored bigicon"></i><p>Express</p></div>
          <div className="icon-container"><i className="devicon-flask-original colored bigicon"></i><p>Flask</p></div>
          <div className="icon-container"><i className="devicon-python-plain colored bigicon"></i><p>Python</p></div>
          <div className="icon-container"><i className="devicon-jira-plain colored bigicon"></i><p>Jira</p></div>
          <div className="icon-container"><i className="devicon-sass-original colored bigicon"></i><p>Sass</p></div> */}
            <div className="icon-container">
              <i className="devicon-git-plain colored bigicon"></i>
              <p>Git</p>
            </div>
          </div>
          <h5 className="skilltitle">Soft skills</h5>
          <ul className="individualskills">
            <li>• Communication skills</li>
            <li>• Problem solving</li>
            <li>• Patience and ability to remain positive under pressure.</li>
            <li>• Can work independently or within a team</li>
            <li>• Time management and Adaptability</li>
          </ul>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        {/* P O R T F O L I O */}
        <h2>Projects</h2>
        <div className="portfolio-container">
          <div className="toggle-buttons">
            <button
              onClick={toggleclick}
              value="current"
              className={projecttype === "current" ? "active" : "toggle-button"}
            >
              {"What I'm working on"}
            </button>

            <button
              onClick={toggleclick}
              value="generalassembly"
              className={
                projecttype === "generalassembly" ? "active" : "toggle-button"
              }
            >
              React Projects
            </button>

            <button
              onClick={toggleclick}
              value="past"
              className={projecttype === "past" ? "active" : "toggle-button"}
            >
              Past Projects
            </button>
          </div>
          {projecttype === "" ? (
            <h3>Click above to view projects</h3>
          ) : (
            <>
              {projecttype === "current" ? <EcommerceProject /> : null}
              {projecttype === "generalassembly" ? (
                <>
                  <TFLProject />
                  <MovieAppProject />
                </>
              ) : null}
              {projecttype === "past" ? (
                <>
                  <Calculator />
                  <Rock/>
                  <Urban/>
                </>
              ) : null}
            </>
          )}
          <a href="#portfolio" className="totop">
            Top of section<i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </section>

      <section className="experience" id="experience">
        <h2>Education</h2>
        <div className="exp-container">
          <div className="project-container">
            <div className="right-side" id="eductionsec">
              <h5 className="edu">Bath Spa University</h5>
              <p className="jobtitle">Web Development Bootcamp</p>
              <p>
                <b>June 2022 - Sep 2022</b>
              </p>
              <p>
                  Took opportunity to join in a 3 months intense web development boot camp course. This gave me insights into React, JavaScript, CSS, Html and Git fundamentals. On top of this I invested my personal time to excel in the above skills. Involved in the group projects which gave exposure to real time working in a team environment. Weekly demonstration of projects helped in improving my presentation skills. This boot camp experience not only gave me academic skills but also personality development skills.
               
              </p>
            </div>
            <div className="left-side" id="edu-right">
              <img
                className="exp-preview-img"
                src="https://thehub.bathspa.ac.uk/MediaFolder/Marketing/branding/logos/bsu-logo.png"
              ></img>
            </div>
          </div>
          <div className="project-container">
            <div className="right-side" id="eductionsec">
              <h5 className="edu">{"Jawaharlal Nehru Technological University-Hyderabad, India"} </h5>
              <p className="jobtitle">Master of Science, Structural Engineer (May 2015)</p>
            
            </div>
           
          </div>
          <div className="project-container">
            <div className="right-side" id="eductionsec">
              <h5 className="edu">{"Jawaharlal Nehru Technological University-Hyderabad, India"} </h5>
              <p className="jobtitle">Bachelor of Science, Civil Engineering (May 2013) </p>
            
            </div>
           
          </div>

          
            
        </div>
      </section>
      
      <footer id="contact">
        <h2 className="h2-white">Contact</h2>
        <p className="email">krishnaveni.nagarapu@gmail.com</p>
        <div className="linksconta">
          <a
            className="link-icon-footer"
            href="https://github.com/Veninagarapu"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github fa-2x links"></i>
          </a>
          <a
            className="link-icon-footer"
            href="https://www.linkedin.com/in/krishnaveni-nagarapu-b49375137/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin fa-2x links"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
