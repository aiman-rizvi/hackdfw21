import './App.css';
import React from "react";

class Portfolio extends React.Component {
    constructor(props) { // this fires in the making of the component
        super(props);
        this.state = {equity: 100};
    }

    componentDidMount() { // this fires once the component starts up
      this.timerID = setInterval(
          () => this.tick(),
          1500
      );
    }

    componentWillUnmount() { // this fires when the component is about to die
      clearInterval(this.timerID);
    }

    minDollars = 143
    maxDollars = 146

    tick() {
      this.setState({equity: {
          dollars: Math.round(this.minDollars + (this.maxDollars - this.minDollars) * Math.round(Math.random() * 100) / 100),
          cents: Math.round(Math.random().toFixed(2)*100)
      }});
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, {this.props.example}</h1>
                <h2>Your account value: ${this.state.equity.dollars}.{this.state.equity.cents}</h2>
            </div>
        );
    }
}

export default Portfolio;