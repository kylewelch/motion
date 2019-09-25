import React, { Component } from 'react'
let lessonData = require('./data.json')

class Progress extends Component {

  render() {
    const barLength = {
      width: 100 * (this.props.question + 1) / lessonData.questions.length + '%'
    };
    return(
      <div class="progress-bar-container">
        <div class="prog-bar-bg">
          <div class="prog-bar" style={barLength}></div>
        </div>
      </div>
    );
  }
}

export default Progress;
