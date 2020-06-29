import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: getRandomColor()
    }
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor(),
      childColor: getRandomColor()
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor} color={this.state.childColor} />
        <Child handleColorChange={this.changeColor} color={this.state.childColor} />
      </div>
    )
  }
}

export default Parent
