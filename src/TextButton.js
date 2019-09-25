import React, { Component } from 'react'

class TextButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  render() {
    return(
      <div class={this.props.isChecked ? "vid-bg-selected" : "vid-bg"} onClick={this.handleClick.bind(this)}>
        <p class="text-btn">
          {this.props.question_data.buttonText[this.props.answer_option]}
          <strong>{this.props.question_data.buttonText2[this.props.answer_option]}</strong>
          {this.props.question_data.buttonText3[this.props.answer_option]}
        </p>
      </div>
    );
  }
}

export default TextButton;
