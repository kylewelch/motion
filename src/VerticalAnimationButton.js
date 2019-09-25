import React, { Component } from 'react'
import circle1 from './img/ball1.gif'
import circle2 from './img/ball2.gif'

let circles = [circle1, circle2]

class VerticalAnimationButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  render() {
    return(
      <div className={this.props.isChecked ? "vid-bg-selected vertical-img" : "vid-bg vertical-img"}>
        <img 
          src={circles[this.props.answer_option]} 
          alt="bouncing ball" 
          onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default VerticalAnimationButton;
