import React from 'react';

class ButtonCounter extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        // let newCount = this.state.count + 1;
        // this.setState({
        //     count: newCount
        // })
        this.setState(previousState => {
            return {
                count: previousState + 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click Me! 2</button>
            </div> 
        )
    }
}

export default ButtonCounter