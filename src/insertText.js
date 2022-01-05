import React, { Component } from 'react'

/*
const handleClickEvent = (id) => {
    console.log(id);
    document.getElementById(id).className -= 'hidden';
}

function insertText(vars) {
    return (
        <div>
            <button onClick={() => handleClickEvent(vars.index)}>{vars.text}</button>
            <h2 id={vars.index} className="hidden text">Text here</h2>
        </div>
    )
}

export default insertText */


export default class insertText extends Component {
    state = {
      textValue: ''
    }
  
    onClick = () => {
      this.setState({
        textValue: 'Here I go'
      })
    }
  
    render() {
      return (
          <>
            <button title="Change Text" onClick={this.onClick}>Button</button>
            <h2>{this.state.textValue}</h2>
          </>

      )
    }
  }

