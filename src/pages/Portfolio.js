import React from "react";

import Huddle from "../imgBank/huddle.JPG";
import Burger from "../imgBank/burger.png";
import RandomNotes from "../imgBank/RandomNotes2.jpg";
import Doggy from "../imgBank/doggy.jpg";
import Weather from "../imgBank/Weather.jpg";
import Quiz from "../imgBank/quiz.png";
import "../styles/common.css";
import "../styles/portfolio.css";


const Portfolio = () => (
  <>
    <h1 className="block-header">Portfolio</h1>
      <p>Click on the picture to access Application. </p>
      <p>Click on the <span className="color-box"> Title </span> for GitHub repository.</p>
      <hr className="custom-hr"></hr>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://project2-team8-dmtv.herokuapp.com/" 
              target="_blank" rel="noopener noreferrer">
              <img src={Huddle} alt="huddle" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/2020-Project2" 
              target="_blank" className="forced-white-link" rel="noopener noreferrer"> Huddle </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://burgerstodevour.herokuapp.com/" 
              target="_blank" rel="noopener noreferrer">
              <img src={Burger} alt="burger" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/burger" 
              target="_blank" className="forced-white-link" rel="noopener noreferrer"> Burger Bonanza </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://note-taker-sept5.herokuapp.com/" 
              target="_blank" rel="noopener noreferrer">
              <img src={RandomNotes} alt="noteTaker" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/noteTaker" 
              target="_blank" className="forced-white-link" rel="noopener noreferrer"> Note Taker </a>
            </div>
          </div>
        </div> 
        <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://vkalaparthy.github.io/2020-Project1/" 
            target="_blank" rel="noopener noreferrer">
              <img src={ Doggy } alt="dog" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/2020-Project1" 
              target="_blank" className="forced-white-link" rel="noopener noreferrer"> Dream Dog </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://vkalaparthy.github.io/Weather-Dashboard/" 
            target="_blank" rel="noopener noreferrer">
              <img src={Weather} alt="weather" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/Weather-Dashboard" 
              target="_blank" className="forced-white-link" rel="noopener noreferrer"> Weather Dashboard </a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://vkalaparthy.github.io/CodeQuiz/" 
              target="_blank" rel="noopener noreferrer">
              <img src={Quiz} alt="quiz" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/CodeQuiz" 
              target="_blank" className="forced-white-link" rel="noopener noreferrer"> Code Quiz </a>
            </div>
          </div>
        </div>
        {/* <div className="col mb-4">
          <div className="card custom-card">
            <a href="https://vkalaparthy.github.io/PasswordGenerator/" target="_blank">
              <img src="imgBank/tech-image2.jpg" alt="image2" className="card-img-top"></img>
            </a>
            <div className="bottom-text">
              <a href="https://github.com/vkalaparthy/PasswordGenerator" target="_blank" className="forced-white-link"> Password Generator </a>
            </div>
          </div>
        </div> */}
      </div>
  </>
);

export default Portfolio;