import React from "react";
import "../App.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="Navbar">
          <ul className="Navbar-uList">
            <li className="Navbar-list">
              <a href="http://localhost:3000/">Clicky Game!</a>
            </li>
            <li className="Navbar-list">Click an image to begin!</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default NavBar;
