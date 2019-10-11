import React, { Component } from 'react'
import graph1 from './img/graph1.svg'
import graph2 from './img/graph2.svg'
import play1 from './img/play1.svg'
import play2 from './img/play2.svg'

let graphs = [graph1, graph2]
let plays = [play1, play2]

class ImageButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  };
  render() {
    return(
      <div class={this.props.isChecked ? "vid-bg-selected" : "vid-bg"} onClick={this.handleClick.bind(this)}>
        <img class="img-btn" src={(this.props.question_data.animation === "easeout") ? plays[this.props.answer_option] : graphs[this.props.answer_option]} />
      </div>
    );
  }
}

export default ImageButton;
