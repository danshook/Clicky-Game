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
    console.log('this component is rendering')
    console.log("this.state", this.state)
    return (
      <div onClick={this.handleClick} className="click-card">
          <p>Num of times clicked: {this.state.numOfTimesClicked}</p>
          
          <img src={this.props.image}alt={""} />
          <Image />

      </div>
    );
  }
}

export default ClickCard;