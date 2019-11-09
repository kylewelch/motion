import React, { Component } from 'react'
import graph1 from './img/graph1.svg'
import graph2 from './img/graph2.svg'

let graphs = [graph1, graph2]

class MatchingButton extends Component {
  handleClick() {
    /*if (this.props.question_complete === false) {*/
    if (this.props.status != true) {
      this.props.logSelection(this.props.index, this.props.value)
    }
  }
  renderImage() {
    switch(this.props.question_data.buttons) {
      case "graphs5":
        return graphs[this.props.index];
        break;
      default:
        return graphs[this.props.index];
    }
  }
  render() {
    return(
      <div class={(this.props.status === true) ? "correct-bg" : (this.props.isChecked ? "vid-bg-selected" : ((this.props.status === false) ? "incorrect-bg": "vid-bg"))} onClick={this.handleClick.bind(this)}>
        <img class="img-btn" src={this.renderImage()} />
        <p>{this.props.question_data.buttonLabels[this.props.index]}</p>
      </div>
    );
  }
}

export default MatchingButton;
