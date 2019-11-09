import React, { Component } from 'react'
import MatchingButton from './MatchingButton.js'

class MatchingPairs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstSelection: null,
      buttonStatus: Array(this.props.question_data.answerValues.length).fill(null),
      pairsRemaining: (this.props.question_data.answerValues.length / 2)
    }
  }
  logSelection(index, value) {
    
    // store the first selection 
    if (this.state.firstSelection === null) {
      this.setState({firstSelection: index})
    }
    
    // deselect the first selection if clicked a second time
    else if (this.state.firstSelection === index) {
      this.setState({firstSelection: null})      
    }
    
    // log a correctly matched pair
    else if (this.props.question_data.answerValues[this.state.firstSelection] === value) {
      let buttonStatus = this.state.buttonStatus.slice();
      buttonStatus[index] = true;
      buttonStatus[this.state.firstSelection] = true;
      this.setState({
        firstSelection: null,
        buttonStatus: buttonStatus,
        pairsRemaining: this.state.pairsRemaining - 1
      });
      
      // Double check on this: should only trigger w/ 0 remaining pairs, but often does at 1 due to possibly due to delay in state change
      this.props.storeAnswer(this.props.question_data.correctAnswer)
      if (this.state.pairsRemaining === 1 || this.state.pairsRemaining === 0) {
        this.props.giveFeedback()
      }
    
    }
    
    // log an incorrectly matched pair
    else {
      let buttonStatus = this.state.buttonStatus.slice();
      buttonStatus[index] = false;
      buttonStatus[this.state.firstSelection] = false;     
      this.setState({
        firstSelection: null,
        buttonStatus: buttonStatus
      })  
      
      // after 1 second, revert the incorrect buttons to their original state (w/ no red background)
      setTimeout( () => {
        for (let i=0; i<buttonStatus.length; i++) {
          if (buttonStatus[i] === false) {
            buttonStatus[i] = null
          }
        }
        this.setState({
          firstSelection: null,
          buttonStatus: buttonStatus
        })}, 1000)
    }
  }

  render() {
    return(
      <div class="button-row">
        {this.props.question_data.answerValues.map((value, index) => {
          return <MatchingButton 
            question={this.props.question}
            key={index}
            index={index}
            value={value}
            isChecked={(this.state.firstSelection === index)}
            question_data={this.props.question_data}
            question_complete={this.state.giveFeedback}
            logSelection={this.logSelection.bind(this)}
            status={this.state.buttonStatus[index]}
          /> 
        })}
      </div>
    );
  }
}

export default MatchingPairs;
