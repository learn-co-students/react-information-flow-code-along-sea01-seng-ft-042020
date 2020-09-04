import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  // state = {
  //   color: getRandomColor()
  // }

  // changeMyOwn = () => {
  //   this.setState({
  //     color: getRandomColor()
  //   })
  // }
  render() {
    return (
      <div
        onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.changeChildren}}
      ></div>
    )
  }
}

export default Child
