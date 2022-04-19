import React from "react";

export default class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count : 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count+1});
    }
    decrement = () => {
        this.setState({count: this.state.count-1});
    }

    render() {
        return(
            <div>
                <button type = 'submit' onClick={this.increment}>increment</button>
                <button type = 'submit' onClick={this.decrement}>decrement</button>

                <div className="Count">Counter: {this.state.count}</div>
            </div>
        )
    }
}