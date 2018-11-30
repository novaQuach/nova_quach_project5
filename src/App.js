import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase';

// Components
import DateTime from './dateTime/DateTime';
import FocusContainer from './focus/FocusContainer';
import CategoryContainer from './categories/CategoryContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'Good evening',
        };
    }
    //how to add items to an array in state
    //grab the current state of the array you are trying to change and save as a variable
    //push the new item on to that array (variable)
    //this.setState( tasks is equal to new array
    //)

    render() {
        return (
            <main className="App">
                <DateTime />
                <FocusContainer />
                <CategoryContainer />
            </main>
        );
    }
}

export default App;
