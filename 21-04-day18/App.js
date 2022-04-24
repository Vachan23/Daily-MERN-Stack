import React from 'react';
import './App.css';
import {Routes, Route, Link, Outlet} from 'react-router-dom';

class App extends React.Component {
  
  render(){
    return(
      <div className='App'>
        
        <Routes>
          <Route path='/' element = {<Default />}>
            <Route path='/home' element={<Home />} />
            <Route path='/stuff' element={<Stuff />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
        </Routes>
        
      </div>
      
    )
  }
}

const Default = () => {
  return(
    <div>
      <h1>Simple SPA</h1>
      <Link to='/home'>Home</Link> <br/>
      <Link to='/stuff'>Stuff</Link> <br/>
      <Link to = '/contact'>Contact</Link>
      <Outlet/>
    </div>
  )
}

const Home = () => {
  return(
    <div>
      <h3>Hello</h3>
      <p>Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
    </div>
  )
}

const Stuff = () => {
  return(
    <div>
      <h1>Stuff</h1>
      <p>Mauris sem velit, vehicula eget sodales vitae, rhoncus eget sapien:
        <ol>
        <li>Nulla pulvinar diam</li>
        <li>Facilisis bibendum</li>
        <li>Vestibulum vulputate</li>
        <li>Eget erat</li>
        <li>Id porttitor</li>
        </ol>
      </p>
    </div>
  )
}

const Contact = () => {
  return(
    <div>
      <h1>GOT QUESTIONS?</h1>

      <p>The easiest thing to do is post on our <a href='https://forum.kirupa.com/'>forums</a>.</p>
    </div>
  )
}


export default App;
