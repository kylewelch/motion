import React, { Component } from 'react'
import close from './img/close.svg'

class Progress extends Component {
  handleClick() {
    this.props.closeLesson()
  }
  render() {
    const barLength = {
      width: 100 * (this.props.question + 1) / this.props.data.questions.length + '%'
    };
    return(
      <div className="progress-bar-container">
        <div className="prog-bar-bg">
          <div className="prog-bar" style={barLength}></div>
        </div>
        <div className="close-lesson" onClick={this.handleClick.bind(this)}><img src={close} alt="closeLesson" /></div>
      </div>
    );
  }
}

export default Progress;
