import React, { Component } from 'react'
import arrow from './img/arrow.svg'
import placeholder from './img/placeholder-image.svg'
let introData = require('./introData.json')

class Intro extends Component {
  startPath() {
    this.props.startPath();
  }
  render() {
    return(
      <div>  
        <div className="top-img">
          <div className="placeholder-container">
            <img src={placeholder} alt="placeholder image" />
          </div>
          <h1 className="intro-header">{introData.intros[0].introText}</h1>
        </div>
        <div className="question-container">
          <p className="intro-paragraph">
            <span>{introData.intros[0].paragraphText[0]}</span> 
            <b>{introData.intros[0].paragraphText[1]}</b> 
            <span>{introData.intros[0].paragraphText[2]}</span> 
            <br />
            <span>{introData.intros[0].paragraphText2}</span></p>
          <p className="intro-paragraph">{introData.intros[0].paragraphText3}</p>
          <div className="vid-bg intro-cta" onClick={this.startPath.bind(this)}>
            <div className="text-btn">
              <span>{introData.intros[0].ctaText}<img src={arrow} alt="arrow" /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
