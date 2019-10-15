import React, { Component } from 'react'

class Summary extends Component {
  render() {
    return(
        <div className="question-container">
          <h1>
            Boom! <br />You got {this.props.totalCorrectAnswers} out of {this.props.data.questions.length} questions correct. Nice work!
          </h1>
          <div class="summary-cta-secondary">Retake Lesson</div>
          <div class="summary-cta" onClick={this.props.closeLesson}>Go to Dashboard</div>
        </div>
    );
  }
}

export default Summary;
