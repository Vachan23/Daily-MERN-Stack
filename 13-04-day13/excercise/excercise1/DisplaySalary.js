import React from 'react';

export default class DisplaySalary extends React.Component{
    render(){
        return(
            <div>
                <h3>Display Salary Component</h3>
                <p>Salary is : Rs. {this.props.empSalary()}</p>
            </div>
        )
    }
}