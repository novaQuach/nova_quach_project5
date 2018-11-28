import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase'

class App extends Component {
  constructor () {
    super();
    this.setState = {
      category : "",
      categoryList: {},
      toDo: "",
      everythingList: {}
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Fall Vibes</h1>
       
      </div>
    );
  }
}

export default App;
