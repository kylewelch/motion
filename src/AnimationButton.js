import React, { Component } from 'react'
import car1 from './img/test1.gif'
import car2 from './img/test2.gif'
import bikeout from './img/bikeout1.gif'

let cars = [car1, car2]

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
          src={(this.props.question_data.id === 8) ? bikeout : cars[this.props.answer_option]} 
          alt="car" 
          onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default AnimationButton;
