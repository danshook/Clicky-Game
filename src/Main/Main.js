import React from "react";
import "../App.css";
import ClickCard from "../ClickCard/ClickCard";
import imageCardDataArray from "../data.json";





class Main extends React.Component {

  state={
    imageCardDataArray
  }

  handleClick = id => {

    // we need a way to find the exact element of the array that has been clicked

    console.log('id clicked', id)


    // add 1 to item clicked
    // id to target the clickCard
    // state.item.numOfTimesClicked

    console.log(imageCardDataArray[2].numOfTimesClicked)

    return 

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
        
         {this.shuffle (this.state.imageCardDataArray).map(item => {
            console.log('item', item)

            return (
              <ClickCard
                key={item.id}
                id={item.id}
                image={item.image}
                numOfTimesClicked={item.numOfTimesClicked}
                handleClick={this.handleClick}
              />
         
          )})}
         
          <ClickCard className="click-card"myCoolImage="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Rick-and-Morty-Run-the-Jewels.jpg" />
                  

      </div>
    );
  }
}

export default Main;
