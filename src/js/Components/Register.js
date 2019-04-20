import React from "react";
import "../../css/Login.css";
import logo from "../../images/logo.png";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import "primereact/resources/themes/nova-colored/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Password } from "primereact/password";
import { sha256, sha224 } from "js-sha256";
import {postUser} from "../DataProvider"

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      name: "",
      lastName: "",
      password: ""
    };
    this.register = this.register.bind(this)
  }

  register() {
    var user = {
      username: this.state.username,
      email: this.state.email,
      name: this.state.name,
      password: sha256(this.state.password),
      lastName: this.state.lastName
    };
    postUser(this.state,console.log,console.log);
    console.log(user)
  }

  render() {
    document.body.id = "body-login";
    return (
      <div>
        <div className="login-center text-center">
          <div className="login-img-div">
            <img className="login-img" src={logo} alt="logo" />
          </div>
          <div>
            <div>
              <span className="p-float-label">
                <InputText
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                  id="username_"
                  type="text"
                />
                <label htmlFor="username_">Username</label>
              </span>
            </div>
            <div>
              <span className="p-float-label">
                <InputText
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  id="email_"
                  type="text"
                />
                <label htmlFor="email_">Email</label>
              </span>
            </div>
            <div>
              <span className="p-float-label">
                <InputText
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                  id="name_"
                  type="text"
                />
                <label htmlFor="name_">Name</label>
              </span>
            </div>
            <div>
              <span className="p-float-label">
                <InputText
                  value={this.state.lastName}
                  onChange={e => this.setState({ lastName: e.target.value })}
                  id="lastName_"
                  type="text"
                />
                <label htmlFor="lastName_">LastName</label>
              </span>
            </div>
            <div>
              <span className="p-float-label">
                <Password
                  id="password_"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <label htmlFor="password_">Password</label>
              </span>
            </div>
            <div className="p-float-label">
              <Button
                id="register-button"
                className="p-button-rounded p-button-secondary"
                onClick={this.register}
                label="Register"
                icon="pi pi-check"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
