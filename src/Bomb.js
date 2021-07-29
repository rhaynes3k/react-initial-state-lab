import React, { Component } from 'react'

class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    const msg = this.state.secondsLeft === 0 ? 'Boom!' : <h5>{this.state.secondsLeft} seconds left before I go boom!</h5>
    return(
  <div>{msg}</div>
    )
  }
}

export default Bomb
// your Bomb code here!
