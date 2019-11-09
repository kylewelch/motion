import React, { Component } from 'react'
import Animation from './Animation.js'
import AnimationButton from './AnimationButton.js'
import AnimationToggle from './AnimationToggle.js'
import VerticalAnimationButton from './VerticalAnimationButton.js'
import ConfirmButton from './ConfirmButton.js'
import TextButton from './TextButton.js'
import ImageButton from './ImageButton.js'
import MatchingPairs from './MatchingPairs.js'
import Feedback from './Feedback.js'
import Video from './Video.js'

let lessonData = require('./lesson1.json')

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
      this.props.tallyCorrectAnswer(this.props.lessonNumber - 1)
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
            {
              
              /* Question text */
              
              
              this.props.question_data.questionText}
            {this.props.question_data.questionHasSpecialTerm ? <em className="special-term">{this.props.question_data.questionText2}</em> : null}
            {this.props.question_data.questionHasSpecialTerm ? this.props.question_data.questionText3 : null}
          </h1>
          { 
            
            /* Top half of question screen: determine which image or animation (if any) to display */
            
            
            (this.props.question_data.animationType === "toggle") ? 
              <AnimationToggle 
                question={this.props.question}
                selected_answer={this.props.selected_answer} 
                storeAnswer={this.storeAnswer.bind(this)}
                question_data={this.props.question_data}
                question_complete={this.state.giveFeedback}
               /> 
              
            
            : (this.props.question_data.animationType === "singleStatic") ? 
              <Animation 
                question_data={this.props.question_data}
              /> 
              
              
            : (this.props.question_data.animationType === "multiStatic") ?   this.props.question_data.animationCount.map((count, index) => {
              return <Animation 
                      key={index}
                      question_data={this.props.question_data}
                      count={count}
                     /> 
                  })
              
            : null 
          }
          {            
            
            /* Buttons: determine which type of buttons to display */
            
            
            (this.props.question_data.buttonType === "animation") ? this.props.question_data.answerOptions.map((answer_option, index) => {
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
            
            
            : (this.props.question_data.buttonType === "matching") ?
              <MatchingPairs 
                question={this.props.question}
                selected_answer={this.props.selected_answer} 
                storeAnswer={this.storeAnswer.bind(this)}
                question_data={this.props.question_data}
                question_complete={this.state.giveFeedback}
                giveFeedback={this.giveFeedback.bind(this)}
              /> 
            
            
            : (this.props.question_data.buttonType === "verticalButton") ? 
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
              
              
            : (this.props.question_data.buttonType === "text") ? 
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
          
          
          { /* Confirmation Button */}
          
          
          {(this.props.question_data.buttonType === "matching") ? null : <ConfirmButton 
            isDisabled={(this.props.selected_answer === null || this.state.giveFeedback)} 
            giveFeedback={this.giveFeedback.bind(this)}
          />}
        </div>
        
        
        { /* Feedback message that appears after question is submitted */}
        
        
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
