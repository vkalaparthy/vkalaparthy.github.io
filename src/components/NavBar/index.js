import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";

// import Home from "../../pages/Home";
// import Portfolio from "../../pages/Portfolio"
import "./style.css";

function NavBar() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <Link className="navbar-brand" href="index.html" id="logo"
            to="/">
            Vani Kalaparthy
          </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link 
                  to="/" 
                  className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  About Me
                </Link>
              {/* <a className="nav-link" href="/">About Me</a> */}
            </li>
            <li className="nav-item">
              <Link 
                to="/portfolio" 
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;