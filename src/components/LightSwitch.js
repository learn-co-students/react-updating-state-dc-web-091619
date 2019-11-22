import React from 'react'

class LightSwitch extends React.Component {

  constructor() {
    super()

    this.state = {
      switchOn : false
    }
  }

  toggleSwitch = () => {
    this.setState( previousState => {
      return ( {
        switchOn: !previousState.switchOn
      } )
    } )
  }

  render() {
    return (
      <button onClick={this.toggleSwitch}> { this.state.switchOn ? "ON" : "OFF" } </button>
    )
  }
}

export default LightSwitch

