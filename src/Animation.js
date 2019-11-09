import React, { Component } from 'react'
import car1 from './img/test1.gif'
import car2 from './img/test2.gif'
import bikeout from './img/bikeout1.gif'
import bikein from './img/bike1.gif'
import noMotion1 from './img/noMotion1.gif'
import noMotion2 from './img/noMotion2.gif'
import noMotion4 from './img/noMotion4.gif'
import easeInCar from './img/easeincar.gif'
import graphs from './img/easingGraphs.svg'
import duration from './img/durationGraph.svg'

let cars = [car1, car2]

class Animation extends Component {
  renderImage() {
    switch(this.props.question_data.animation) {
            case "bikeout":
              return bikeout;
              break;
            case "bikein":
              return bikein;
              break;
            case "noMotion1":
              return noMotion1;
              break;
            case "noMotion2":
              return noMotion2;
              break;
            case "noMotion4":
              return noMotion4;
              break;
            case "easeInCar":
              return easeInCar;
              break; 
            case "graphs":
              return graphs;
              break;
            case "durationChart":
              return duration;
              break;
            default:
              return cars[this.props.count]
          }
  }
  render() {
    return(
      <div className={"vid-bg"}>
        {this.props.question_data.hasLabel ? <p class="animation-label">{this.props.question_data.labelText[this.props.answer_option]}</p> : null}
        <img 
          src={this.renderImage()} 
          alt="car" />
      </div>
    );
  }
}

export default Animation;
