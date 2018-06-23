import React from "react";
import "../App.css";
import ClickCard from "../ClickCard/ClickCard";
import data from "../data.json";





class Main extends React.Component {

  state={
    data
  }

  shuffle = ([...a]) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  render() {
    console.log("Main renders!");
    console.log("THIS STATE: ", this.state);
    return (
      <div>
        
         {this.shuffle (this.state.data).map(item => (
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
