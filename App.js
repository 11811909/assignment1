import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
import Form from './components/Form'
import React, { Component } from 'react'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet name="Navya" />
    
        <Form />
  
      </div>
    )
    }
}

export default App;
