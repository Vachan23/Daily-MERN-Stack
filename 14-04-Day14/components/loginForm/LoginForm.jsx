import React, { Component } from "react";

export default class LoginForm extends Component {
  validUsers = [
    {
      username: "suraj",
      password: "123",
    },
    {
      username: "josh",
      password: "1234",
    },
    {
      username: "dave",
      password: "12345",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      autheticated: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.validUsers.forEach((user) => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
        this.setState({
          autheticated: true,
        });
      }
    });
  };
  render() {
    return (
      <div className="loginForm">
        {this.state.autheticated ? (
          <div className="dashboard">
            <h3>Welcome {this.state.username}</h3>
            <button onClick={() => this.setState({ autheticated: false })}>
              Logout
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <br />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        )}
      </div>
    );
  }
}
