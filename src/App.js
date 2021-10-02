import logo from './logo.svg';
import './App.css';
import React from "react";
import Portfolio from './Portfolio';
import Aspirations from './Aspirations';
import Recommendations from './Recommendations';

import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav, NavDropdown} from "react-bootstrap";


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

  clickMe(event, someParameter){
    this.setState({page: someParameter})
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

                  <Nav.Link onClick={(e) => {this.clickMe(e, "portfolio");}}>
                    Portfolio
                  </Nav.Link>

                  <Nav.Link onClick={(e) => {this.clickMe(e, "aspirations");}}>
                    Aspirations
                  </Nav.Link>

                  <Nav.Link onClick={(e) => {this.clickMe(e, "recommendations");}}>
                    Recommendations
                  </Nav.Link>

                </Nav>
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

    return toRender;
  }
}

export default App;
