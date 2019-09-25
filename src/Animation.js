import React, { Component } from 'react'
import car1 from './img/test1.gif'
import car2 from './img/test2.gif'

let cars = [car1, car2]

class Animation extends Component {

  render() {
    return(
      <div class="vid-bg">
        <img src={cars[this.props.answer_option]} alt="car" />
      </div>
    );
  }
}

export default Animation;
