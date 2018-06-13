import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
      </div>
    );
  }
}

export default App;
