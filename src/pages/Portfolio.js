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
      <hr className="custom-hr"></hr>

      <div className="row row-cols-1 row-cols-md-1">
        <div className="card custome-card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="https://project2-team8-dmtv.herokuapp.com/" 
                target="_blank" rel="noopener noreferrer">
                <img src={Huddle} alt="huddle" className="card-img-side"></img>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Huddle</h5>
                <p className="card-text">This is an appication that is designed using Express, Handlebars, Sequelize ORM using MySQL database. Huddle page is responsive and uses Bootstrap framework. It is deployed in Heroku.</p>
                <p>Click on the picture to access Application. </p>
                <a href="https://github.com/vkalaparthy/2020-Project2" target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-1">
        <div className="card custome-card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="https://burgerstodevour.herokuapp.com/" 
                target="_blank" rel="noopener noreferrer">
                <img src={Burger} alt="burger" className="card-img-side"></img>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Burger Bonanza</h5>
                <p className="card-text">This is a burger logger with MySQL, Node, Express, Handlebars and handmade ORM. used MVC design pattern to break the application into 3 parts. It's deployed in Heroku</p>
                <p>Click on the picture to access Application. </p>
                <a href="https://github.com/vkalaparthy/burger" 
              target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-1">
        <div className="card custome-card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="https://note-taker-sept5.herokuapp.com/" 
                target="_blank" rel="noopener noreferrer">
                <img src={RandomNotes} alt="noteTaker" className="card-img-side"></img>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">This application can be used to write, save, and delete notes using an express backend and it saves and retrieves note data from a JSON file. </p>
                <p>Click on the picture to access Application. </p>
                <a href="https://github.com/vkalaparthy/noteTaker" 
              target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-1">
        <div className="card custome-card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="https://vkalaparthy.github.io/2020-Project1/" 
              target="_blank" rel="noopener noreferrer">
                <img src={ Doggy } alt="dog" className="card-img-side"></img>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Dream Dog</h5>
                <p className="card-text">An application that runs in a browser and features dynamically updated HTML, CSS, and JavaScript. Utilizes The Dog API and PetFinder API to allow a user to search for dogs.</p>
                <p>Click on the picture to access Application. </p>
                <a href="https://github.com/vkalaparthy/2020-Project1"
              target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-1">
        <div className="card custome-card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="https://vkalaparthy.github.io/Weather-Dashboard/" 
              target="_blank" rel="noopener noreferrer">
                <img src={Weather} alt="weather" className="card-img-side"></img>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">This is a weather Dashboard, which provided Today's weather along with 5 day forecast by using third-party APIs. </p>
                <p>Click on the picture to access Application. </p>
                <a href="https://github.com/vkalaparthy/Weather-Dashboard"
              target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-1">
        <div className="card custome-card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <a href="https://vkalaparthy.github.io/CodeQuiz/" 
                target="_blank" rel="noopener noreferrer">
                <img src={Quiz} alt="quiz" className="card-img-side"></img>
              </a>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Code Quiz</h5>
                <p className="card-text">This is a timed Quiz on HTML and Javascript fundamentals that any student can take and store the high scores to check the progress. </p>
                <p>Click on the picture to access Application. </p>
                <a href="https://github.com/vkalaparthy/CodeQuiz"
              target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
);

export default Portfolio;