import React from "react";
import ProfilePic from "../imgBank/profilePic.jpg";
import "../styles/common.css";
import "../styles/home.css";

const Home = () => (
  <>
    <h1 className="block-header">About Me</h1>
    <hr className="custom-hr"></hr>
    <img src={ProfilePic} alt="profile-pic" className="photo"></img>
    <p>A fullstack developer, with core Java development experience.</p>
    <p>I have a wide variety of experience in different fields of software development Life Cycle including Project Management, Architecture, Analysis, Design, Development and Testing of Telecommunication products and Oracle Identity Manager.</p>
    <p>I have 14 years of experience and I am looking for a fulltime opportunity to utilize & enhance my skills. Here are my skill sets: </p>
    <table className="table table-sm table-borderless">
      <tbody>
        <tr>
          <td><i>Language:</i></td>
          <td colSpan="2">JAVA, JavaScript, C++, HTML, UML, C, SQL/ESQL</td>
        </tr>
        <tr>
          <td><i>DBMSs:</i></td>
          <td colSpan="2">LDAP, AD, OUD, Oracle, MySQL, MangoDB, MS SQL Server</td>
        </tr>
        <tr>
          <td><i>Protocols:</i></td>
          <td colSpan="2">TCP/IP, TL1, CLI and SNMP</td>
        </tr>
        <tr>
          <td><i>Packages:</i></td>
          <td colSpan="2">Eclipse Neon 3, Apache Directory Studio, Oracle SQL Developer, Visual Studio Code, Rational Rose (UML), X-Designer</td>
        </tr>
        <tr>
          <td><i>Version Control:</i></td>
          <td colSpan="2">GitHub, Bitbucket, SVM, ECMS, CMTS, SABLIME, Clearcase</td>
        </tr>
        <tr>
          <td><i>Operating System:</i></td>
          <td colSpan="2">Linux, Windows, Unix</td>
        </tr>
      </tbody>
    </table>
    <p>I have an undergraduate degree in Engineering in "Electronics & Communication" and a Master's Degree in Computer Science.</p>
    <p>I also have a Project Management Certification from Cornell.</p>
    <h4>More about me:</h4>
    <a href="https://github.com/vkalaparthy" 
      target="_blank" rel="noopener noreferrer"> 
      My GitHub Page
    </a>
    <br></br>
    <a href="https://www.linkedin.com/in/vani-kalaparthy-aa01319/" 
      target="_blank" rel="noopener noreferrer"> 
      My LinkedIn Page
    </a>
    <br></br>
    <a href="https://drive.google.com/file/d/1LNojNZEbmkCORpKGS8kyQFzS8fm868vU/view?usp=sharing" 
      target="_blank" rel="noopener noreferrer"> 
      My Resume
    </a>
    <br></br> 
    <h4>Contact Info:</h4>
    <p>Email: kalaparthy.vani@gmail.com</p>
    <p>Phone: 919-579-4862</p>
    <br></br>
    <p>Apart from being in software industry, I love to grow organic food, cook/bake, travel, photograph, read fiction and solve Su-do-ku. </p>
  </>
);

export default Home;