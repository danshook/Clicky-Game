import React from "react";
import "../App.css";
import Image from "../Image/Image";


class ClickCard extends React.Component {


  render() {

    return (
      <div onClick={() => this.props.handleClick(this.props.id)} className="click-card">
          <p>Num of times clicked: {this.props.numOfTimesClicked}</p>
          
          <img src={this.props.image}alt={""} />
          <Image />

      </div>
    );
  }
}

export default ClickCard;