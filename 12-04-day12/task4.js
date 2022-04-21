import './App.css';
import React from 'react';

class App extends React.Component {
  render () {
    return(
      <div className='App'>
        <Click
        showAlert = {() => alert('CLICKED!')}
        />
      </div>
    )
  }
}

const Click = (props) => {
  return(
    <div>
      <button onClick = {() => props.showAlert()}> CLICK </button>
    </div>
  )
}

export default App;