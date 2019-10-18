import React, { Component } from 'react'
import Progress from './ProgressBar.js'
import Question from './Question.js'
import Summary from './Summary.js'
let lesson1 = require('./lesson1.json')
let lesson2 = require('./lesson2.json')
let lessons = [lesson1, lesson2]

class Lesson extends Component {
  constructor(props) {
    super(props)
      this.state = {
        question: 0,
        answers: [null, null, null, null, null, null, null, null, null, null, null],
        lessonComplete: false
      }
  }
  closeLesson() {
    this.props.closeLesson()
  }
  retakeLesson() {
    this.setState({
      question: 0,
      answers: [null, null, null, null, null, null, null, null, null, null, null],
      lessonComplete: false
    })
  }
  storeAnswer(answer) {
    let answers = this.state.answers.slice();
    answers[this.state.question] = answer;
    this.setState({answers: answers})
  }
  tallyCorrectAnswer(lesson) {
    this.props.tallyCorrectAnswer(lesson)
  }
  showNextQuestion() {
    let lessonData = lessons[this.props.lessonNumber - 1]
    if (this.state.question < lessonData.questions.length - 1) {
      this.setState((state) => {
        return {question: state.question + 1}
      })
    }
    else {
      this.setState({lessonComplete: true});
      this.props.updateLessonStatus(this.props.lessonNumber -1);
    }
  }
  render() {
    let lessonData = lessons[this.props.lessonNumber - 1]
    if (this.state.lessonComplete) {
      return(
        <Summary 
          closeLesson={this.closeLesson.bind(this)}
          totalCorrectAnswers={this.props.totalCorrectAnswers}
          percentCorrect={this.props.totalCorrectAnswers / lessonData.questions.length}
          data={lessonData}
          restartLesson={this.retakeLesson.bind(this)}
        />
      );
    }
    else {
      return(
        <div>
          <Progress 
            question={this.state.question}
            closeLesson={this.closeLesson.bind(this)}
            data={lessonData}
          />
          <Question
            lessonNumber={this.props.lessonNumber}
            question={this.state.question}
            question_data={lessonData.questions[this.state.question]}
            storeAnswer={this.storeAnswer.bind(this)}
            selected_answer={this.state.answers[this.state.question]} 
            showNextQuestion={this.showNextQuestion.bind(this)}
            tallyCorrectAnswer={this.tallyCorrectAnswer.bind(this)}
          />
        </div>
      );
    }
  }
}

export default Lesson;
