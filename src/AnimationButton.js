import React, { Component } from 'react'
import car1 from './img/test1.gif'
import car2 from './img/test2.gif'
import swipe1 from './img/swipe.gif'
import swipe2 from './img/swipe2.gif'
import bikeout from './img/bikeout1.gif'
import bikein from './img/bike1.gif'

let cars = [car1, car2]
let swipes = [swipe1, swipe2]

class AnimationButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  render() {
    return(
      <div className={this.props.isChecked ? "vid-bg-selected" : "vid-bg"}>
        {this.props.question_data.hasLabel ? <p class="animation-label">{this.props.question_data.labelText[this.props.answer_option]}</p> : null}
        <img 
          src={(this.props.question_data.animation === "bikeout") ? bikeout : ((this.props.question_data.animation === "bikein") ? bikein : ((this.props.question_data.animation === "swipe") ? swipes[this.props.answer_option] : cars[this.props.answer_option]))} 
          alt="car" 
          onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default AnimationButton;
