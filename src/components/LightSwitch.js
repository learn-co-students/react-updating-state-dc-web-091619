import React from 'react';

class LightSwitch extends React.Component {
    constructor(){
        super()
        this.state = {
            toggled: false
        }
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                toggled: !previousState.toggled
            }
        })
    }

    render(){
        return (
            <div>
                <h1>Toggled State</h1>
                <button onClick ={this.handleClick}>
                    {this.state.toggled ? "ON" : "FALSE"}
                </button>
            </div>
        )
    }
}

export default LightSwitch