import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF' // D2. The parent can control the color of it's children and apply similar random color functionality
    }
  }
  // D1-3 making color changing arrow function useing setState to update the state
  // D2 giving the changeColor method an argument (sending data BACK to the parent from child) 
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        {/* D1. passing the changColor function as a prop to the children elements */}
        {/* D2. Passing the data that represents the color of the children down as props */}
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
