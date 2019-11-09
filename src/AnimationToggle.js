import React, { Component } from 'react'
import blank from './img/blank.png'
import blankui from './img/uiblank.png'
import bikestill from './img/bikeStill.png'
import blankMenu from './img/blankMenu.svg'
import bike1 from './img/bike1.gif'
import bike2 from './img/bike2.gif'
import bikeout1 from './img/bikeout1.gif'
import bikeout2 from './img/bikeout2.gif'
import ui1 from './img/ui.gif'
import ui2 from './img/ui2.gif'
import ease1 from './img/ease1.gif'
import ease2 from './img/ease2.gif'
import ease_1 from './img/ease-1.gif'
import ease_2 from './img/ease-2.gif'
import ease_3 from './img/ease-3.gif'
import ease_4 from './img/ease-4.gif'
import slide1 from './img/easeslide1.gif'
import slide2 from './img/easeslide2.gif'
import slide3 from './img/easeslide3.gif'
import slide4 from './img/easeslide4.gif'
import slideBg from './img/slideBg.svg'
import menu1 from './img/slide1.gif'
import menu2 from './img/slide2.gif'
import menu3 from './img/slide3.gif'
import menu4 from './img/slide4.gif'

let bikes = [bike2, bike1]
let bikeouts = [bikeout1, bikeout2]
let uis = [ui1, ui2]
let eases = [ease1, ease2]
let eases2 = [ease_2, ease_3, ease_4, ease_1]
let slides = [slide3, slide2, slide1, slide4]
let menus = [menu1, menu2, menu4, menu3]

class AnimationToggle extends Component {
  renderDefaultImage() {
    switch(this.props.question_data.animation) {
            case "bikeOutToggle":
              return bikestill;
              break;
            case "uiToggle":
              return blankui;
              break;
            case "easingToggle":
              return blankui;
              break;
            case "easingToggle2":
              return slideBg;
              break;
            case "menuToggle":
              return blankMenu;
              break;
            case "easeout":
              return blankui;
              break;
            default:
              return blank
          }
  }
  renderAnimation() {
    switch(this.props.question_data.animation) {
            case "uiToggle":
              return uis[this.props.selected_answer];
              break;
            case "bikeOutToggle":
              return bikeouts[this.props.selected_answer];
              break;
            case "easeout":
              return eases[this.props.selected_answer];
              break;
            case "easingToggle":
              return eases2[this.props.selected_answer];
              break;
            case "easingToggle2":
              return slides[this.props.selected_answer];
              break;
            case "menuToggle":
              return menus[this.props.selected_answer];
              break;
            default:
              return bikes[this.props.selected_answer]
          }
  }
  render() {
    return(
      <div class="vid-bg">
        <img src={(this.props.selected_answer == null) ?
            this.renderDefaultImage() : this.renderAnimation()
        }
          
           /* ((this.props.question_data.animation === "ui" || this.props.question_data.animation === "easeout") ? blankui : 
             (this.props.question_data.animation === "bike") ? bikestill : blank) 
          
          : (this.props.question_data.animation === "ui") ? uis[this.props.selected_answer] : (this.props.question_data.animation === "bike") ? bikeouts[this.props.selected_answer] : (this.props.question_data.animation === "easeout") ? eases[this.props.selected_answer] : bikes[this.props.selected_answer]} */
          
          
          alt="person driving motorcycle" />
      </div>
    );
  }
}


export default AnimationToggle;
