import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import {getUsersList} from './fetch.js';
import ProfilePic from './ProfilePic.js';
import User from './Users';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

//   getUsersList = async() => {
//     let res = await fetch("https://reqres.in/api/users");
//     let list = await res.json();
//     console.log(list)

//     return list.data;
// }

  componentDidMount(){
    getUsersList().then(data => this.setState({
      data,
    }))
  }

  render() {
    console.log(this.state.data)
    return(
      <div className='App'>
        <h1>Hello Cosmos!</h1>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/users' element = {<Users data={this.state.data}/>} />
                <Route path='/aboutus' element = {<AboutUs/>} />
                <Route path='/contactus' element = {<ContactUs/>} />
                <Route path='/profilepic/:id' element = {<ProfilePic/>}/>
            </Routes>
                {/* <Users/> */}
      </div>
    )
  }
}

const Home = () => {
  return (
      <div>
          <h3>This is Home Component</h3>
          <Link to='/users' >Users Link</Link> <br/>
          <Link to='/aboutus' >About Link</Link><br/>
          <Link to='/contactus' >Contact Link</Link>
          
      </div>
  )
}



const Users = (props) => {
  return(
    <div>
        {
          props.data.map(user =>(
            <User user={user} />
          ))
        }
        {/* This is User Component */}
    </div>
)
}


const AboutUs = () => {
  return(
    <div>
      <h3>This is AboutUs Component</h3>
    </div>
  )
}

const ContactUs = () => {
  return(
    <div>
      <h3>This is ContactUs Component</h3>
    </div>
  )
}

export default App;





// class Users extends React.Component{
//   render() {
//   return(
//     <div className='usersList'>
//         <h3>Users List</h3>
//         <table>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//           {this.state.data.map((user) => (
//                         <tr>
//                             <td>{user.id}</td>
//                             <td>
//                                 {user.first_name} {user.last_name}
//                             </td>
//                             <td>{user.email}</td>
                            
//                         </tr>
//                     ))}
//         </table>
//     </div>
//   )
//   }
// }