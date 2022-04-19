import React from "react";
import DisplayData from "./DisplayData";
import DisplaySalary from "./DisplaySalary";

export default class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            name: "Daniel",
            isPresent: true,
            salary: 2000,
            leaves: [2, 8, 12, 15],
            contact: {
                phone: ["810922xxxx", "810933xxx"],
                address: "New Lane City",
            },
        };
    }

    calcSalary = () => {
        return (31 - this.state.leaves.length) * this.state.salary;
    }

    render() {
        return(
            <div>
                <h3>Employee Data Component</h3>
                <DisplayData
                empData = {this.state}
                empSalary = {this.calcSalary}
                />
                <DisplaySalary
                empSalary = {this.calcSalary}
                />
            </div>
        )
    }

}