import React, { Component } from "react";
import DisplayFruit from "./DisplayFruit";

export default class FruitList extends Component {
  //fruits demo list
  fruits = [
    {
      name: "Apple",
      qty: 4,
    },
    {
      name: "Pineapple",
      qty: 2,
    },
    {
      name: "Orange",
      qty: 7,
    },
  ];

  //constructor
  constructor(props) {
    super(props);

    //state to store a single fruit
    this.state = {
      fruitName: "",
    };
  }

  //update the state
  handleSearch = (e) => {
    this.setState({
      fruitName: e.target.value,
    });
  };

  //display the result of search
  filterFruit = () => {
    //if length of state.fruitName > 0 else []
    let data =
      this.state.fruitName.length > 0
        ? this.fruits.filter((fruit) =>
            fruit.name.toLowerCase().match(this.state.fruitName.toLowerCase())
          )
        : [];

    //mapping through the filterd data
    return data;
  };

  render() {
    return (
      <div className="fruitList">
        <h4>Fruits List</h4>

        {/* form container  */}
        <div className="container">
          {/* on change the search works so didnt include submit */}
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-input">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                name="search"
                id="search"
                onChange={this.handleSearch}
                value={this.state.fruitName}
              />
            </div>
          </form>
        </div>

        {/* fruit display container  */}
        <div className="container">
          <DisplayFruit filterFruit={this.filterFruit()} />
        </div>
      </div>
    );
  }
}
