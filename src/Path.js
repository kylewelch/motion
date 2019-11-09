import React, { Component } from 'react'
import Link from './Link.js'

const lessons = ["Easing Basics", "Easing Practice", "Timing"]

class Path extends Component {
  constructor(props) {
    super(props)
      this.state = {

      }
  }
  openLesson(lesson) {
    this.props.openLesson(lesson)
  }
  render() {
    return(
      <div>
        <div className="introText">
          <h1 className="pathHeading">Motion Design</h1>
          <p className="pathSubHeading">Learning Path</p>
        </div>
        {lessons.map((lesson, index) => {
          return <Link
                   lesson={index + 1}
                   name={lesson}
                   key={index}
                   status={this.props.lessonStatus[index]}
                   openLesson={this.openLesson.bind(this)}
                  />       
        })}
      </div>
    );
  }
}

export default Path;
