import React from "react";
import "../App.css";
import ClickCard from "../ClickCard/ClickCard";



class Main extends React.Component {
  render() {
    console.log("Main renders!");
    return (
      <div>
          {/* <p>lorem lsadkfjs;dfjsl;dfkjsdfl</p> */}
          <ClickCard myCoolImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Rick-and-Morty-Run-the-Jewels.jpg" />
          <ClickCard />
          <ClickCard />
          <ClickCard />
          <ClickCard />
          <ClickCard />
          <ClickCard />
      </div>
    );
  }
}

export default Main;
