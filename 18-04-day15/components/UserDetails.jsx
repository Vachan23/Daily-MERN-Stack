import React, { Component, createRef } from "react";
import { deleteUser, updateUserDetails } from "../api/api";
import Form from "./Form";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };

    this.formRef = createRef();
  }
  userDetailsFormToggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  // addUserDetailsToForm = () => {
  //   console.log(this.formRef.current);
  //   this.formRef.current.state = {
  //     name: this.props.user.first_name,
  //     job: "scholar",
  //   };
  // };
  handleUserDeletion = () => {
    deleteUser(this.props.user.id);
    console.log(this.props.user.id);
    this.props.updateUsersList(this.props.user.id);
  };
  render() {
    return (
      <div className="user">
        <h5>{this.props.user.first_name}</h5>
        <p>{this.props.user.email}</p>
        <div className="img-container">
          <img src={this.props.user.avatar?.toString()} alt="no data" />
        </div>
        <div className="user-btns">
          <button
            className="user-btn update"
            onClick={this.userDetailsFormToggle}
          >
            +
          </button>
          <button
            className="user-btn delete"
            onClick={() => {
              this.handleUserDeletion();
              // this.addUserDetailsToForm();
            }}
          >
            +
          </button>
        </div>
        {this.state.toggle ? (
          <Form
            ref={this.formRef}
            callback={updateUserDetails}
            userId={this.props.user.id}
            toggle={this.userDetailsFormToggle}
            heading={"Update " + this.props.user.first_name + " info"}
          />
        ) : null}
      </div>
    );
  }
}
