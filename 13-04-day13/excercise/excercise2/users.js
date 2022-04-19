import React from "react";

export default class UserList extends React.Component {
    constructor (props){
        super(props)
        this.state = {data : []}
    }

    componentDidMount(){
        this.getUserList()
    }

    getUserList = async () => {
        let res = await fetch("https://reqres.in/api/users?page=2");
        let products = await res.json();
    
        this.setState({ data: products.data });
    }

    render(){
        return(
            <div className="userList">
                <h3>Users List</h3>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </tr>

                    {this.state.data.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>
                                {user.first_name} {user.last_name}
                            </td>
                            <td>{user.email}</td>
                            <td>
                                <img src = {user.avatar} alt =''/>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}