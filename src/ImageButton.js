import React, { Component } from 'react'
import graph1 from './img/graph1.svg'
import graph2 from './img/graph2.svg'

let graphs = [graph1, graph2]

class ImageButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  render() {
    return(
      <div class={this.props.isChecked ? "vid-bg-selected" : "vid-bg"} onClick={this.handleClick.bind(this)}>
        <img class="img-btn" src={graphs[this.props.answer_option]} />
      </div>
    );
  }
}

export default ImageButton;
