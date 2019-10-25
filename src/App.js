import React, { Component } from 'react';
import Lesson from './Lesson.js'
import Path from './Path.js'
import Intro from './Intro.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "intro",
      lessonStatus: ["incomplete", "locked", "locked", "locked"],
      lessonScores: [0, 0, 0, 0],
      unlockedLessons: 2
    }
  }
  startPath() {
    this.setState({display: 1})
  }
  openLesson(lesson) {
    if (this.state.lessonStatus[lesson - 1] != "locked") {
      this.setState({display: lesson})
    }
  }  
  tallyCorrectAnswer(lesson) {
    let scores = this.state.lessonScores.slice()
    scores[lesson]++
    this.setState({lessonScores: scores})
  }
  resetScores(lesson) {
    let scores = this.state.lessonScores.slice()
    scores[lesson] = 0
    this.setState({lessonScores: scores})
  }
  closeLesson() {
    this.setState({display: "path"})
  }
  showSummary() {
    this.setState({display: "summary"})
  }
  updateLessonStatus(lesson) {
    let lessonStatus = this.state.lessonStatus.slice();
    lessonStatus[lesson] = "complete"
    if (lessonStatus[lesson + 1] === "locked") {
      lessonStatus[lesson + 1] = "incomplete"
    }
    this.setState({lessonStatus: lessonStatus})
  }
  render() {
    return (
      <div className="container">
        {(this.state.display === "intro") && 
          <Intro 
            startPath={this.startPath.bind(this)}
          />
        }
        {(this.state.display === "path") && 
          <Path 
            openLesson={this.openLesson.bind(this)}
            lessonStatus={this.state.lessonStatus}
          />
        }
        {Number.isInteger(this.state.display) && 
          <Lesson 
            lessonNumber={this.state.display}
            tallyCorrectAnswer={this.tallyCorrectAnswer.bind(this)}
            totalCorrectAnswers={this.state.lessonScores[this.state.display - 1]}
            resetScores={this.resetScores.bind(this)}
            closeLesson={this.closeLesson.bind(this)}
            showSummary={this.showSummary.bind(this)}
            updateLessonStatus={this.updateLessonStatus.bind(this)}
          />
        }

      </div>
    );
  }
}
export default App;
