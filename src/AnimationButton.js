import React, { Component } from 'react'
import car1 from './img/test1.gif'
import car2 from './img/test2.gif'
import swipe1 from './img/swipe.gif'
import swipe2 from './img/swipe2.gif'
import bikeout from './img/bikeout1.gif'
import bikein from './img/bike1.gif'
import noMotion1 from './img/noMotion1.gif'
import noMotion2 from './img/noMotion2.gif'
import noMotion4 from './img/noMotion4.gif'

let cars = [car1, car2]
let swipes = [swipe1, swipe2]

class AnimationButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  renderImage() {
    switch(this.props.question_data.animation) {
            case "bikeout":
              return bikeout;
              break;
            case "bikein":
              return bikein;
              break;
            case "swipe":
              return swipes[this.props.answer_option];
              break;
            case "noMotion1":
              return noMotion1;
              break;
            case "noMotion2":
              return noMotion2;
              break;
            case "noMotion4":
              return noMotion4;
              break;
            default:
              return cars[this.props.answer_option]
          }
  }
  render() {
    return(
      <div className={this.props.isChecked ? "vid-bg-selected" : "vid-bg"}>
        {this.props.question_data.hasLabel ? <p class="animation-label">{this.props.question_data.labelText[this.props.answer_option]}</p> : null}
        <img 
          src={this.renderImage()
            
            /*(this.props.question_data.animation === "bikeout") ? bikeout : ((this.props.question_data.animation === "bikein") ? bikein : ((this.props.question_data.animation === "swipe") ? swipes[this.props.answer_option] : cars[this.props.answer_option]))*/} 
          alt="car" 
          onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default AnimationButton;
