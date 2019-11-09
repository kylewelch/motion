import React, { Component } from 'react'
import graph1 from './img/graph1.svg'
import graph2 from './img/graph2.svg'
import graph3 from './img/graph3.svg'
import graph4 from './img/graph4.svg'
import graph5 from './img/graph5.svg'
import play1 from './img/play1.svg'
import play2 from './img/play2.svg'

let graphs = [graph1, graph2]
let plays = [play1, play2]
let graphs2 = [graph3, graph4]
let graphs3 = [graph1, graph5, graph4, graph2]
let graphs4 = [graph5, graph4, graph3, graph1]
let graphs5 = [graph5, graph4, graph2, graph1]

class ImageButton extends Component {
  handleClick() {
    if (this.props.question_complete === false) {
       this.props.storeAnswer(this.props.question_data.answerOptions[this.props.answer_option])
    }
  }
  renderImage() {
    switch(this.props.question_data.buttons) {
      case "playButton":
        return plays[this.props.answer_option];
        break;
      case "ease-in-outGraphs":
        return graphs2[this.props.answer_option];
        break;
      case "graphs3":
        return graphs3[this.props.answer_option];
        break;
      case "graphs4":
        return graphs4[this.props.answer_option];
        break;
      case "graphs5":
        return graphs5[this.props.answer_option];
        break;
      default:
        return graphs[this.props.answer_option];
    }
  }
  render() {
    return(
      <div class={this.props.isChecked ? "vid-bg-selected" : "vid-bg"} onClick={this.handleClick.bind(this)}>
        <img class="img-btn" src={this.renderImage()} />
      </div>
    );
  }
}

export default ImageButton;
