import React from 'react'
import '../../css/Login.css'
import logo from '../../images/logo.png'
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Link} from 'react-router-dom'
import 'primereact/resources/themes/nova-colored/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {getUser} from "../DataProvider"
import { sha256, sha224 } from "js-sha256";

export default class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.login = this.login.bind(this)
  }

  login(){
    var cred = {
      "username":this.state.username,
      "password":sha256(this.state.password)
    }
    getUser(this.state,console.log,console.log);
  }

  render() {
    document.body.id="body-login";
    return (
      <div>
        <div className="login-center text-center">
          <div className="login-img-div">
            <img className="login-img" src = {logo} alt="logo"/>
          </div>
          <form>
            <div>
              <span className="p-float-label">
                <InputText value={this.state.username} id="username_" type="text" onChange={(e) => this.setState({username: e.target.value})} />
                <label htmlFor="username_">Username</label>
              </span>
            </div>
            <div>
              <span className="p-float-label">
                <InputText value={this.state.password} id="password_" type="password" onChange={(e) => this.setState({password: e.target.value})} />
                <label htmlFor="password_">Password</label>
              </span>
            </div>

            <div className="p-float-label">
              <Button id="login-button" onClick={this.login} className="p-button-rounded" label="Login" icon="pi pi-check" />
              <Link className="forgot-text" to="/register">
                <Button id="register-button" className="p-button-rounded p-button-secondary"  label="Register" icon="pi pi-check" />
              </Link>
            </div>
          </form>
          <div className="forgot-text-div">
            <Link className="forgot-text" to="/">forgot your password?</Link>    
          </div>
        </div>
       </div>
    );
  }
    

}