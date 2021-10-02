import './App.css';
import React from "react";

class Aspirations extends React.Component {
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
                <h1>Hello, {this.props.example}</h1>
            </div>
        );
    }
}

export default Aspirations;