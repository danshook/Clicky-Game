import React from "react";
import "../App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Clicky Game!</h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once!
          </h2>
        </header>
      </div>
    );
  }
}

export default Header;
