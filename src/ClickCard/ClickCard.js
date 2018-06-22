import React from "react";
import "../App.css";
import Image from "../Image/Image";


class ClickCard extends React.Component {

  state = {
    numOfTimesClicked: 0
  }

  handleClick = () => {

    

    // this.state.numOfTimesClick++;
    this.setState({
      numOfTimesClicked: this.state.numOfTimesClicked + 1
    }, () => {
      if(this.state.numOfTimesClicked > 1) {
        window.alert('Game over!')
      }
    })
  }

  render() {
    return (
      <div>
          <p>lorem lsadkfjs;dfjsl;dfkjsdfl</p>
          <Image />

      </div>
    );
  }
}

export default ClickCard;
