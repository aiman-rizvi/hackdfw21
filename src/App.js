import logo from './logo.svg';
import './App.css';
import React from "react";
import Portfolio from './Portfolio';
import Aspirations from './Aspirations';
import Recommendations from './Recommendations';

import Navbar from 'react-bootstrap/Navbar';
import {Button, Container, Form, FormControl, Nav, NavDropdown} from "react-bootstrap";
import Ticker from "./Ticker";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "portfolio"
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}
  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  forceUpdate(callback) {
    super.forceUpdate(callback);
  }

  handleNavClick(event, pageName){
    this.setState({page: pageName})
    this.forceUpdate()
  }

  handleTickerSearch = (event) => {
    this.setState({page: "ticker"})
    this.forceUpdate()
  }

  render() {
    let toRender = []

    toRender.push(
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand>Goldman Invest</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                  <Nav.Link onClick={(e) => {this.handleNavClick(e, "portfolio");}}>
                    Portfolio
                  </Nav.Link>

                  <Nav.Link onClick={(e) => {this.handleNavClick(e, "aspirations");}}>
                    Aspirations
                  </Nav.Link>

                  <Nav.Link onClick={(e) => {this.handleNavClick(e, "recommendations");}}>
                    Recommendations
                  </Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      onChange={event => {this.setState({ticker: event.target.value})}}
                  />
                  <Button type="submit" variant="outline-success">Search</Button>
                  <Button
                      variant="outline-primary"
                      onClick={this.handleTickerSearch}
                  >
                    Search
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );

    if (this.state.page === "portfolio") {
      toRender.push(
          <Portfolio example={this.state.page}/>
      );
    }
    if (this.state.page === "aspirations") {
      toRender.push(
          <Aspirations example={this.state.page}/>
      );
    }
    if (this.state.page === "recommendations") {
      toRender.push(
          <Recommendations example={this.state.page}/>
      );
    }
    if (this.state.page === "ticker") {
      toRender.push(
          <Ticker example={this.state.page} ticker={this.state.ticker}/>
      );
    }

    return toRender;
  }
}

export default App;
