import React, { Component } from "react";

export default class DisplayFruit extends Component {
  render() {
    return (
      <div className="fruit">
        {this.props.filterFruit.map((el) => (
          <div key={el.name}>
            <p>Fruit : {el.name}</p>
            <p>Qty : {el.qty}</p>
          </div>
        ))}
      </div>
    );
  }
}
