import React, { Component } from 'react'
import AnimationButton from './AnimationButton.js'
import AnimationToggle from './AnimationToggle.js'
import VerticalAnimationButton from './VerticalAnimationButton.js'
import ConfirmButton from './ConfirmButton.js'
import TextButton from './TextButton.js'
import ImageButton from './ImageButton.js'
import Feedback from './Feedback.js'

let lessonData = require('./data.json')

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correctAnswer: false,
      giveFeedback: false
    }
  }
  storeAnswer(answer) {
    this.props.storeAnswer(answer)
  }
  giveFeedback() {
    if (this.props.selected_answer === this.props.question_data.correctAnswer) {
      this.setState({correctAnswer: true})
    }
    this.setState({giveFeedback: true})
  }
  showNextQuestion() {
    if (this.state.giveFeedback) {
      this.setState({correctAnswer: false, giveFeedback: false});
      this.props.showNextQuestion()
    }
  }
  render() {
    return(
      <div>
        <div className="question-container">
          <h1>
            {this.props.question_data.questionText}
            {this.props.question_data.questionHasSpecialTerm ? <em className="special-term">{this.props.question_data.questionText2}</em> : null}
            {this.props.question_data.questionHasSpecialTerm ? this.props.question_data.questionText3 : null}
          </h1>
          {(this.props.question_data.animationType === "button") ? this.props.question_data.answerOptions.map((answer_option, index) => {
              return <AnimationButton 
                      question={this.props.question}
                      key={index}
                      answer_option={answer_option}
                      selected_answer={this.props.selected_answer} 
                      isChecked={(this.props.selected_answer === index)}
                      storeAnswer={this.storeAnswer.bind(this)}
                      question_data={this.props.question_data}
                      question_complete={this.state.giveFeedback}
                     /> 
                  }) 
          : (this.props.question_data.animationType === "verticalButton") ? 
            <div class="vertical-animations">
              {this.props.question_data.answerOptions.map((answer_option, index) => {
              return <VerticalAnimationButton 
                      question={this.props.question}
                      key={index}
                      answer_option={answer_option}
                      selected_answer={this.props.selected_answer} 
                      isChecked={(this.props.selected_answer === index)}
                      storeAnswer={this.storeAnswer.bind(this)}
                      question_data={this.props.question_data}
                      question_complete={this.state.giveFeedback}
                     /> 
                  }) }
            </div>
          : (this.props.question_data.animationType === "toggle") ? 
              <AnimationToggle 
                question={this.props.question}
                selected_answer={this.props.selected_answer} 
                storeAnswer={this.storeAnswer.bind(this)}
                question_data={this.props.question_data}
                question_complete={this.state.giveFeedback}
               /> 
          : (this.props.question_data.animationType === "none") ? null 
          : (this.props.question_data.animationType === "singleStatic") ? 
              <AnimationButton 
                question_data={this.props.question_data}
              /> 
          : this.props.question_data.answerOptions.map((answer_option, index) => {
              return <AnimationButton 
                      key={index}
                      answer_option={answer_option}
                      question_data={this.props.question_data}
                     /> 
                  })}
          {(this.props.question_data.buttonType === "text") ? 
            this.props.question_data.answerOptions.map((answer_option, index) => {
              return <TextButton 
                      question={this.props.question}
                      key={index}
                      answer_option={answer_option}
                      selected_answer={this.props.selected_answer} 
                      isChecked={(this.props.selected_answer === index)}
                      storeAnswer={this.storeAnswer.bind(this)}
                      question_data={this.props.question_data}
                      question_complete={this.state.giveFeedback}
                     /> 
                  })
          : (this.props.question_data.buttonType === "image") ? 
            <div class="button-row">
              {this.props.question_data.answerOptions.map((answer_option, index) => {
                return <ImageButton 
                  question={this.props.question}
                  key={index}
                  answer_option={answer_option}
                  selected_answer={this.props.selected_answer} 
                  isChecked={(this.props.selected_answer === index)}
                  storeAnswer={this.storeAnswer.bind(this)}
                  question_data={this.props.question_data}
                  question_complete={this.state.giveFeedback}
                /> 
              })}
            </div>
          : null}
          <ConfirmButton 
            isDisabled={(this.props.selected_answer === null || this.state.giveFeedback)} 
            giveFeedback={this.giveFeedback.bind(this)}
          />
        </div>
        <Feedback 
          question_data={this.props.question_data} 
          correct_answer={this.state.correctAnswer} 
          giveFeedback={this.state.giveFeedback}
          showNextQuestion={this.showNextQuestion.bind(this)}
        />
      </div>
    );
  }
}

export default Question;
