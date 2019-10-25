import React, { Component } from 'react'
import noMotion from './img/noMotion1.gif'

class Video extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  render() {
    return(
      <div className="vid-bg">
        <video 
          src={noMotion} 
          alt="ui" 
          onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default Video;
