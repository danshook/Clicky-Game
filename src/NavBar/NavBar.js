import React from "react";
import "../App.css";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <section className="App-navbar">
          <ul>
            <li className="App-brand">
              <a href="http://localhost:3000/">Clicky Game!</a>
            </li>
            <li className="App-brand">Click an image to Begin!</li>
            <li className="App-brand">Score</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default NavBar;
