import React from "react";

import "./style.css";

function ProjectDiv(props) {
  return (
    <div className="row row-cols-1 row-cols-md-1">
      <div className="card custome-card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">
              <img src={props.image} alt={props.altImage} className="card-img-side"></img>
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.info} </p>
              <p>Click on the picture to access Application. </p>
              <a href={props.repoLink} target="_blank" className="repo-link" rel="noopener noreferrer"> Repository </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDiv;