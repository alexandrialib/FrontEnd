import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBModalFooter } from 'mdbreact';
import '../../../css/RegisterForm/SingIn.css'
import {getUser} from "../../DataProvider"

import {Link} from 'react-router-dom'

export default class SingIn extends Component {
    constructor(){
        super();
        this.state={
            
            username:"",
            password:""
        }
        this.login = this.login.bind(this)
    }

    onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    login(){
        
        getUser(this.state,console.log,console.log);
      }
      onSubmit = async () => {
        if(this.state.username==="" || this.state.password===""){
         
        }
      }

    render(){
  return (
    <MDBContainer className="cambios">
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Username"
                name="username"
                icon="user"
                group
                type="email"
                onChange={e => this.onChange(e)}
                value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="lock"
                name="password"
                group
                required="required" 
                onChange={e => this.onChange(e)}
                value={this.state.password}
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small red-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="red-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="button"
                  
                  color="red darken-3"
                  rounded
                  href="/singin"
                  onClick={() => this.onSubmit()}
                  className="btn-block z-depth-1a"
                 
                >
                 <Link style={{color:"white"}}to={{pathname:'/profile',
                state:{user:this.state.username,pass:this.state.password}
            }}>Sign in </Link>
                  
                </MDBBtn>
              </div>
        
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/singup" className="red-text ml-1">

                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );}
};

