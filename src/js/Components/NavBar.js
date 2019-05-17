import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBCol} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import {  MDBFormInline, MDBBtn} from
"mdbreact";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Modal from 'react-bootstrap/Modal'
import {Link} from 'react-router-dom'
class NavbarPage extends Component {

 state={
      id:"1",
      isOpen:false,
      modal2: false,
      show:false
    }
  

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  
handleTextChange(e) {
		 this.setState({id: e.target.value});
	 }
toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
handleClose () {
  console.log("kiki")
  var rand =  1 + (Math.random() * (1000-1));
  var random=Math.floor(rand);
 
}

handleShow =()=>  {
  console.log("holi")
  this.setState({ show: true });
}

render() {
  return (
    <MDBNavbar color="brown darken-3" dark expand="md" >
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
          <MDBNavItem  >
          <a  style={{color:"white",position:"absolute",top:"24px"}} onClick={this.toggle(2)}>Prueba </a>
          
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
                <MDBDropdownItem href="/singin">Sing in</MDBDropdownItem>
                <MDBDropdownItem href="/singup">Sing up</MDBDropdownItem>
                
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)}>
        <MDBModalHeader toggle={this.toggle(2)}>Session</MDBModalHeader>
        <MDBModalBody>
        <input className="share-input" id="connectS-input"  
        type="text"
        placeholder="Connect a session"
        onChange={(e) => this.handleTextChange(e)} />
        </MDBModalBody>
        <MDBModalFooter>
          <p><button className="btn-right"><Link style={{color:"black"}}to={{pathname:'/session/'+this.state.id
            }}><a>Connect</a></Link></button></p>
             <p><button className="btn-right" onClick={this.handleClose} ><Link style={{color:"black"}}to={{pathname:'/session/'+this.state.id
            }}><a>New</a> </Link></button></p>
        </MDBModalFooter>
      </MDBModal>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;

