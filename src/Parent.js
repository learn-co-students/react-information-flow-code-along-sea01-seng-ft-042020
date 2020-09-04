import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {


  state = {
    color: getRandomColor(),
    // childrenColor: '#FFF'
    childrenColor: getRandomColor()
  }

  changeColor = () => {
    this.setState({
      color: getRandomColor(),
      // childrenColor: newChildColor
      childrenColor: getRandomColor()

    })
  }

  // changeChildrenColor = () => {
  //   this.setState({
  //     color: getRandomColor()
  //   })
  // }



  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child handleColorChange={this.changeColor} changeChildren={this.state.childrenColor}/>
        <Child handleColorChange={this.changeColor} changeChildren={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
