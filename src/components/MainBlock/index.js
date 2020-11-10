import React from "react";
import { Route } from "react-router-dom";

import Home from "../../pages/Home";
import Portfolio from "../../pages/Portfolio";
import Contact from "../../pages/Contact";
import "./style.css";


function MainBlock() {

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <section className="row">
          <div className="col-md-8">
            <article className="block">
              <Route exact path="/" component={Home} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MainBlock;