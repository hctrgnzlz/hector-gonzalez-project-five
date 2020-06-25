import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import DreamForm from "./components/DreamForm.js";

class App extends Component {
  render() {
    return (
      <div className="dreamDiv">
        <Header />
        <DreamForm />
        <footer>
          <p>Copyright © Hector Gonzalez 2020 </p>
          <a href="https://hctr.ca">
            <i class="fas fa-globe"></i>
          </a>
          <a href="https://github.com/hctrgnzlz/">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/hctrgnzlz">
            <i class="fab fa-twitter"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
