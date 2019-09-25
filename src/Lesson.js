import React, { Component } from 'react'
import Progress from './ProgressBar.js'
import Question from './Question.js'
let lessonData = require('./data.json')


class Lesson extends Component {
  constructor(props) {
    super(props)
      this.state = {
        question: 0,
        answers: [null, null, null, null, null, null, null, null]
      }
  }
  storeAnswer(answer) {
    let answers = this.state.answers.slice();
    answers[this.state.question] = answer;
    this.setState({answers: answers})
  }
  showNextQuestion() {
    if (this.state.question < lessonData.questions.length - 1) {
      this.setState((state) => {
        return {question: state.question + 1}
      })
    }
  }
  render() {
    return(
      <div>
        <Progress 
          question={this.state.question}
        />
        <Question 
          question={this.state.question}
          question_data={lessonData.questions[this.state.question]}
          storeAnswer={this.storeAnswer.bind(this)}
          selected_answer={this.state.answers[this.state.question]} 
          showNextQuestion={this.showNextQuestion.bind(this)}
        />
      </div>
    );
  }
}

export default Lesson;
