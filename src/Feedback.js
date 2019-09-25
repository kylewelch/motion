import React, { Component } from 'react'
import arrow from './img/arrow.svg'
class Feedback extends Component {
  handleClick() {
    this.props.showNextQuestion()
  };
  render() {
    return(
      <div className={this.props.giveFeedback ? (this.props.correct_answer ? "feedback-correct" : "feedback-incorrect") : "feedback-disabled"} onClick={this.handleClick.bind(this)}>
        {this.props.giveFeedback ? <span className="feedback-message">
          {this.props.correct_answer ? this.props.question_data.feedbackCorrect : this.props.question_data.feedbackIncorrect} 
        </span> : null}
        {this.props.giveFeedback ? <div class="feedback-continue-button">Continue</div> : null}
      </div>
    );
  }
}

export default Feedback;
