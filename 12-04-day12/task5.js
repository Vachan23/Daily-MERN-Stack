import './App.css';
import React from 'react';

class App extends React.Component {
  render () {
    return(
      <div className='App'>
        <Click
        sum = {() => alert('Sum was clicked!')}
        multiply = {() => alert('Multiplication was clicked!')}
        division = {() => alert('Division was clicked!')}
        />
      </div>
    )
  }
}

const Click = (props) => {
  return(
    <div>
      <button onClick = {() => props.sum()}> Sum </button><br></br>
      <button onClick = {() => props.multiply()}> Multiplication </button><br></br>
      <button onClick = {() => props.division()}> Division </button><br></br>
    </div>
  )
}



export default App;
