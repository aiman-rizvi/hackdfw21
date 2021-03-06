import './App.css';
import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

class Portfolio extends React.Component {
    constructor(props) { // this fires in the making of the component
        super(props);
        this.state = {equity: {}};
    }

    componentDidMount() { // this fires once the component starts up
        this.randomMoney()

        this.timerID = setInterval(
          () => this.tick(),
          1500
      );
    }

    componentWillUnmount() { // this fires when the component is about to die
      clearInterval(this.timerID);
    }

    tick() {
        this.randomMoney()
    }

    randomMoney(min=145, max=150) {
        this.setState({equity: {
                dollars: Math.round(min + (max - min) * Math.round(Math.random() * 100) / 100),
                cents: Math.round(Math.random().toFixed(2)*100)
        }});
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, {this.props.example}</h1>
                <h2>Your account value: ${this.state.equity.dollars}.{this.state.equity.cents}</h2>

                <PieChart
                    lineWidth={15}
                    radius={25}
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                />;
            </div>
        );
    }
}

export default Portfolio;