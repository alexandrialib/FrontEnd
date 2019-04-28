import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBCol} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import {  MDBFormInline, MDBBtn} from
"mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBNavbar color="red darken-3" dark expand="md" >
      <MDBNavbarBrand>
        <strong className="white-text">Alexandria</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/categories">Categories</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/About">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Dropdown</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
        <MDBNavItem>
        <Router>
          <MDBCollapse isOpen={this.state.collapsed} navbar>
            <MDBNavbarNav right onClick={this.handleNavbarClick}>
              <MDBFormInline className="md-form mr-auto m-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"
                
                aria-label="Search"  />
                <MDBBtn outline color="white" size="sm" type="submit" className="mr-auto">
                  Search
                </MDBBtn>
              </MDBFormInline>
            </MDBNavbarNav>
          </MDBCollapse>
        </Router>
        </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Sing in</MDBDropdownItem>
                <MDBDropdownItem href="/login">login</MDBDropdownItem>
                
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;

