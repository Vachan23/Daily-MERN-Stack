import React from 'react';

export default class DisplayData extends React.Component {
    render() {
        return(
            <div>
                <h3>Display Employee Data</h3>
                <div className='empData'>
                    <p>ID : {this.props.empData.id}</p>
                    <p>Name: {this.props.empData.name}</p>
                    <p>Salary : {this.props.empSalary()}</p>
                    <p>Leaves : {this.props.empData.leaves.join(", ")}</p>
                    <p>
                        Contact : <br /> Phone:{" "}
                        {this.props.empData.contact.phone.join(", ")}
                        <br/>
                        Address : {this.props.empData.contact.address}
                    </p>
                </div>
            </div>
        )
    }
}