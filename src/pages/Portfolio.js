import React from "react";

import ProjectDiv from "../components/ProjectDiv";
import MusicImage from "../imgBank/music-image.jpg";
import EmpDirectory from "../imgBank/emp-directories.jpg";
import Huddle from "../imgBank/huddle.JPG";
import Burger from "../imgBank/burger.png";
import RandomNotes from "../imgBank/RandomNotes2.jpg";
import Doggy from "../imgBank/doggy.jpg";
import Weather from "../imgBank/Weather.jpg";
import Quiz from "../imgBank/quiz.png";
import "../styles/common.css";
// import "../styles/portfolio.css";


const Portfolio = () => (
  <>
    <h1 className="block-header">Portfolio</h1>
      <hr className="custom-hr"></hr>

      <ProjectDiv
        deployedLink={"https://jamez.herokuapp.com/"}
        image={MusicImage}
        altImage={"jamez"}
        title={"jamEZ"}
        info={"A MERN stack application that is created using Spotify API & uses User Authentication for accounts"}
        repoLink={"https://github.com/vkalaparthy/project3-repo"}
      />

      <ProjectDiv
        deployedLink={"https://vkalaparthy.github.io/react-employee-directory/"}
        image={EmpDirectory}
        altImage={"emp-dir"}
        title={"Employee Directory"}
        info={"Created an employee directory using React library. This application's UI is broken down into components, manage component state, and responds to user events."}
        repoLink={"https://github.com/vkalaparthy/react-employee-directory"}
      />

      <ProjectDiv 
        deployedLink={"https://project2-team8-dmtv.herokuapp.com/"}
        image={Huddle}
        altImage={"huddle"}
        title={"Huddle"}
        info={"This is an appication that is designed using Express, Handlebars, Sequelize ORM using MySQL database. Huddle page is responsive and uses Bootstrap framework. It is deployed in Heroku."}
        repoLink={"https://github.com/vkalaparthy/2020-Project2"}
      />

      <ProjectDiv 
        deployedLink={"https://burgerstodevour.herokuapp.com/"}
        image={Burger}
        altImage={"burger"}
        title={"Burger Bonanza"}
        info={"This is a burger logger with MySQL, Node, Express, Handlebars and handmade ORM. used MVC design pattern to break the application into 3 parts. It's deployed in Heroku"}
        repoLink={"https://github.com/vkalaparthy/burger"}
      />

      <ProjectDiv 
        deployedLink={"https://note-taker-sept5.herokuapp.com/"}
        image={RandomNotes}
        altImage={"noteTaker"}
        title={"Note Taker"}
        info={"This application can be used to write, save, and delete notes using an express backend and it saves and retrieves note data from a JSON file."}
        repoLink={"https://github.com/vkalaparthy/noteTaker"}
      />

      <ProjectDiv 
        deployedLink={"https://vkalaparthy.github.io/2020-Project1/"}
        image={Doggy}
        altImage={"dog"}
        title={"Dream Dog"}
        info={"An application that runs in a browser and features dynamically updated HTML, CSS, and JavaScript. Utilizes The Dog API and PetFinder API to allow a user to search for dogs."}
        repoLink={"https://github.com/vkalaparthy/2020-Project1"}
      />

      <ProjectDiv 
        deployedLink={"https://vkalaparthy.github.io/Weather-Dashboard/"}
        image={Weather}
        altImage={"weather"}
        title={"Weather Dashboard"}
        info={"This is a weather Dashboard, which provided Today's weather along with 5 day forecast by using third-party APIs."}
        repoLink={"https://github.com/vkalaparthy/Weather-Dashboard"}
      />

      <ProjectDiv 
        deployedLink={"https://vkalaparthy.github.io/CodeQuiz/"}
        image={Quiz}
        altImage={"quiz"}
        title={"Code Quiz"}
        info={"This is a timed Quiz on HTML and Javascript fundamentals that any student can take and store the high scores to check the progress."}
        repoLink={"https://github.com/vkalaparthy/CodeQuiz"}
      />   
  </>
);

export default Portfolio;