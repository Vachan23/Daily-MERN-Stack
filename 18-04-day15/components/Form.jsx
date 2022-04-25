import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.callback(this.state, this.props.userId);
    this.props.toggle();
  };
  render() {
    return (
      <div className="form-container">
        <h4>{this.props.heading}</h4>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <input
            type="text"
            name="job"
            id="job"
            placeholder="Job"
            required
            value={this.state.job}
            onChange={(e) => this.setState({ job: e.target.value })}
          />
          <div className="form-btns">
            <input type="submit" value="SUBMIT" />
            <input
              type="button"
              value="CANCEL"
              onClick={() => this.props.toggle()}
            />
          </div>
        </form>
      </div>
    );
  }
}
