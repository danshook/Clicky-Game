import React from "react";
import "../App.css";
import ClickCard from "../ClickCard/ClickCard";
import data from "../data.json";



class Main extends React.Component {
  state={
    data
  }
  render() {
    console.log("Main renders!");
    return (
      <div>
          {/* <p>lorem lsadkfjs;dfjsl;dfkjsdfl</p> */}
         { this.state.data.map(item => (
            <ClickCard
            key={item.id}
            image={item.image}
            />
          ))}
         
          <ClickCard className="click-card"myCoolImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Rick-and-Morty-Run-the-Jewels.jpg" />
          
      </div>
    );
  }
}

export default Main;
