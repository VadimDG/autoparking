import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import AutoService from "./AutoService";

function Tables() {
    return <h1>Tables</h1>
}

function AddTableRecord() {
    return <h1>AddTableRecord</h1>
}

class FixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      currentUser: this.getCurrentUser(),
      activeLink: null
    };
  }

  getCurrentUser = () => {
    return "Andrey";
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  render() {
    const bgPink = { backgroundColor: "#2a75c1" };
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar style={bgPink} dark expand="md">
              <MDBNavbarBrand href="/">
                <strong>Авто</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem  active={this.state.activeLink === 'service'}>
                    <MDBNavLink to="/autoservice">Сервисы</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/tables">Таблица</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  {this.state.currentUser ? (
                    <>
                      <MDBNavItem>
                        <MDBNavLink to="#">
                          {this.state.currentUser}
                          <MDBIcon icon="user-tie" />
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink to="#">
                          <MDBIcon icon="sign-out-alt" />
                        </MDBNavLink>
                      </MDBNavItem>
                    </>
                  ) : null}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
          <Switch>
            <Route path="/autoservice">
              <AutoService />
            </Route>
            <Route path="/tables">
              <Tables />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/addtablerecord">
              <AddTableRecord />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default FixedNavbarExample;
