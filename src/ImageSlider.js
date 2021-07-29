import React, { Component } from 'react'

class ImageSlider extends Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }


  render() {
    return(
      <div>
        <h5>I am on slide {this.state.currentSlideIndex}</h5>
      </div>
    )
  }
}
export default ImageSlider

// your ImageSlider code here!
