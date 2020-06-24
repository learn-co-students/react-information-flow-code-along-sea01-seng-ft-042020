import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     color: getRandomColor()
  //   }
  // }

state = {
  color: getRandomColor(),
  childrenColor: '#FFF'
}

changeColor = (newChildColor) => {
  this.setState({
    color: getRandomColor(),
    childrenColor: newChildColor
  })
}

// could also be, below but want to show how newChildColor is how we bubble up to parent
// changeColor = () => {
//   this.setState({
//     color: getRandomColor(),
//     childrenColor: getRandomColor()
//   })
// }


  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
