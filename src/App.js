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
          <p>hctr</p>
        </footer>
      </div>
    );
  }
}

export default App;
