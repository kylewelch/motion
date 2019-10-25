import React, { Component } from 'react'

class Summary extends Component {
  render() {
    return(
        <div className="question-container">
          <h1 className="summary-header">
            {(this.props.percentCorrect > .5) ? 'Boom!' : 'Shucks!'} 
            <br />You got {this.props.totalCorrectAnswers} out of {this.props.data.questions.length} questions correct. 
            {(this.props.percentCorrect > .5) ? ' Nice Work!' : ' Maybe try again?'} 
          </h1>
          <div className="summary-cta-secondary" onClick={this.props.restartLesson}>Retake Lesson</div>
          <div className="summary-cta" onClick={this.props.closeLesson}>Go to Dashboard</div>
        </div>
    );
  }
}

export default Summary;
