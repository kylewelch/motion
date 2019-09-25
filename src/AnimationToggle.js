import React, { Component } from 'react'
import blank from './img/blank.png'
import blankui from './img/uiblank.png'
import bikestill from './img/bikeStill.png'
import bike1 from './img/bike1.gif'
import bike2 from './img/bike2.gif'
import bikeout1 from './img/bikeout1.gif'
import bikeout2 from './img/bikeout2.gif'
import ui1 from './img/ui.gif'
import ui2 from './img/ui2.gif'

let bikes = [bike2, bike1]
let bikeouts = [bikeout1, bikeout2]
let uis = [ui1, ui2]

class AnimationToggle extends Component {

  render() {
    return(
      <div class="vid-bg">
        <img src={(this.props.selected_answer == null) ? 
            ((this.props.question_data.id === 4) ? blankui : 
             (this.props.question_data.id === 6) ? bikestill : blank) : (this.props.question_data.id === 4) ? uis[this.props.selected_answer] : (this.props.question_data.id === 6) ? bikeouts[this.props.selected_answer] : bikes[this.props.selected_answer]} alt="person driving motorcycle" />
      </div>
    );
  }
}

export default AnimationToggle;
