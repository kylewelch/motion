import React, { Component } from 'react'

class ConfirmButton extends Component {
  handleClick() {
    if (this.props.isDisabled != true) {
      this.props.giveFeedback() 
    }
  };
  render() {
    return(
      <div class={this.props.isDisabled ? "confirm-disabled" : "confirm"} onClick={this.handleClick.bind(this)}>Check
      </div>
    );
  }
}

export default ConfirmButton;
