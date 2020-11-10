import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainBlock from "./components/MainBlock";
import Footer from "./components/Footer";

// const App = () => <PortfolioContainer />;
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <MainBlock />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
