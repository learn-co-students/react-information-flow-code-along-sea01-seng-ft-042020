import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div
        className="child"
        /*D2 updated handleColorChange to take an argument of a random color. That color is passed as 
        newChildColor to handle color change and assigns the color to childrenColor, thereby changing
        child color on click */
        onClick={ ()=> this.props.handleColorChange(getRandomColor())}
        style={{backgroundColor: this.props.color}}
        //D2. now the data for the color comes from the props passed down from theparent 
      ></div>
    )
  }
}

export default Child
