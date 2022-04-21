import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Text
          name = 'vachan'
          showAlert = {() => alert('Alert!')}
          sum = {(n1,n2) => alert(n1+n2)}
          mult = {(n1,n2) => alert(n1*n2)}
        />

      </div>
    )
  }
}

const Text= (props) => {
  return (
    <div>
      <p>Hello {props.name}! How're you?</p>
      <button onClick = {() => props.showAlert()}>Click</button><br></br>
      <button onClick={() => props.sum(30, 40)}>Add</button><br></br>
      <button onClick={() => props.mult(10,5)}>Multiply</button>
    </div>
  )
}



export default App;
