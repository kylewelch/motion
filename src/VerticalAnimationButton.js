import React, { Component } from 'react'
import circle1 from './img/ball1.gif'
import circle2 from './img/ball2.gif'
import open1 from './img/open.gif'
import open2 from './img/open2.gif'

let circles = [circle1, circle2]
let opens = [open1, open2]

class VerticalAnimationButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  renderAnimations() {
    switch(this.props.question_data.buttons) {
      case "balls":
        return circles[this.props.answer_option];
        break;
      case "easingApps":
        return opens[this.props.answer_option];
        break;
      default:
        return null;
    }
  }
  render() {
    return(
      <div className={this.props.isChecked ? "vid-bg-selected vertical-img" : "vid-bg vertical-img"}>
        <img 
          src={this.renderAnimations()} 
          alt="bouncing ball" 
          onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default VerticalAnimationButton;
