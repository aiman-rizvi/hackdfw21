import './App.css';
import React from "react";

class Ticker extends React.Component {
    constructor(props) { // this fires in the making of the component
        super(props);
    }

    componentDidMount() { // this fires once the component starts up
    }

    componentWillUnmount() { // this fires when the component is about to die
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, {this.props.example} is {this.props.ticker}</h1>
            </div>
        );
    }
}

export default Ticker;