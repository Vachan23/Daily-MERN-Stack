import React, { Component } from "react";
import { createNewUser, getUsersList } from "../api/api";
import Form from "./Form";
import UserDetails from "./UserDetails";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      toggle: false,
    };
  }

  //fetch data on mounting
  componentDidMount() {
    getUsersList().then((data) =>
      this.setState({
        data,
      })
    );
  }

  usersFormToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  handleAddUser = (user) => {
    createNewUser(user).then((res = {}) =>
      this.setState({ data: [...this.state.data, res] })
    );
  };

  updateUsersList = (userId) => {
    this.setState({
      data: this.state.data.filter((user) => user.id !== userId),
    });
  };

  render() {
    return (
      <div className="userList-container">
        <div className="addUser">
          <button onClick={this.usersFormToggle}>Add User</button>
        </div>
        <div className="userList">
          {this.state.data.map((user) => (
            // <div className="user" key={user.id}>
            //   <h5>{user.first_name}</h5>
            //   <p>{user.email}</p>
            //   <div className="img-container">
            //     <img src={user.avatar?.toString()} alt="no data" />
            //   </div>
            // </div>

            <UserDetails
              user={user}
              key={user.id}
              updateUsersList={this.updateUsersList}
            />
          ))}
        </div>
        {this.state.toggle ? (
          <Form
            callback={createNewUser}
            toggle={this.usersFormToggle}
            heading="Add New User"
          />
        ) : null}
      </div>
    );
  }
}
