import React, { Component } from "react";

export default class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
    };
  }

  handleChange = (e) => {
    if (e.target.checked) {
      this.setState({
        toDoList: [...this.state.toDoList, e.target.value],
      });
    } else {
      this.setState({
        toDoList: this.state.toDoList.filter((ele) => ele !== e.target.value),
      });
    }
  };
  render() {
    return (
      <div>
        <h4>To Do List :</h4>
        <form className="toDoList">
          <div className="formInput">
            <label htmlFor="eat">Eat</label>
            <input
              type="checkbox"
              name="eat"
              id="eat"
              value="eat"
              onChange={this.handleChange}
            />
          </div>
          <div className="formInput">
            <label htmlFor="work">Work</label>
            <input
              type="checkbox"
              name="work"
              id="work"
              value="work"
              onChange={this.handleChange}
            />
          </div>
          <div className="formInput">
            <label htmlFor="sleep">Sleep</label>
            <input
              type="checkbox"
              name="sleep"
              id="sleep"
              value="sleep"
              onChange={this.handleChange}
            />
          </div>
          <div className="formInput">
            <label htmlFor="repeat">Repeat</label>
            <input
              type="checkbox"
              name="repeat"
              id="repeat"
              value="repeat"
              onChange={this.handleChange}
            />
          </div>
        </form>
        <div className="displayToDoList">
          <h5>Task Done</h5>
          {this.state.toDoList.map((el) => (
            <div>{el}</div>
          ))}
        </div>
      </div>
    );
  }
}
