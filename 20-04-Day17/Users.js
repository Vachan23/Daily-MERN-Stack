import React  from "react";
import { Link } from "react-router-dom";

export default function User(props) {
    return (
        <tr className="user">
            <td>
                <Link to={`/profilepic/${props.user.id}`}>
                    {props.user.first_name} {props.user.last_name}
                </Link>
            </td>
            <td>{props.user.email}</td>
        </tr>
    );
}