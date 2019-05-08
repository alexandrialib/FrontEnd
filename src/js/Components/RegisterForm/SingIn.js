import React,{Component} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '../../../css/RegisterForm/SingIn.css'
import { prototype } from "events";
import {getUser} from "../../DataProvider"
import { sha256, sha224 } from "js-sha256";
export default class SingIn extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
        this.login = this.login.bind(this)
    }
    login(){
        var cred = {
          "username":this.state.username,
          "password":sha256(this.state.password)
        }
        getUser(this.state,console.log,console.log);
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
                group
                type="email"
                value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                group
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
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
                  href="/profile"
                  onClick={this.login}
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="github" className="red-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="red-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/login" className="red-text ml-1">

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

