import React, { Component } from 'react'
import check from './img/check.svg'
import lock from './img/lock.svg'

class Link extends Component {
  handleClick() {
    this.props.openLesson(this.props.lesson)
  }
  render() {
    return(
      <div className="lessonLink" onClick={this.handleClick.bind(this)}>
        <div className={(this.props.status === "locked") ? "circle circle-locked" : (this.props.status === "complete") ? "circle circle-completed" : "circle"}>
          {(this.props.status === "complete") ? <img src={check} alt="check" /> : (this.props.status === "locked") ? <img src={lock} alt="lock" /> : null}
        </div>
        <p className="lesson-label">{this.props.name}</p>
      </div>
    );
  }
}

export default Link;
