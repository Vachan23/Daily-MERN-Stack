import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function ProfilePic() {
    const [ user, setUser] = useState({});
    const { id } = useParams();
    console.log(id);

    const getSingleUser =async(id)=>{
        let res = await fetch(`https://reqres.in/api/users/${id}`)
        let user = await res.json();
        console.log(user)
        setUser(user.data)
        return user.data;
    }

    useEffect(() => {
        getSingleUser(id).then((user) => setUser(user));
    }, [id]);
    return (
        <div className="user">
            <h5>{user.first_name}</h5>
            <p>{user.email1}</p>
            <div className="img-container">
                <img src={user.avatar?.toString()} alt="no data" />
            </div>
        </div>
    );
}