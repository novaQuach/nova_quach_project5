import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import firebase from './firebase';

// Components
import DateTime from './dateTime/DateTime';
import FocusContainer from './focus/FocusContainer';
import CategoryContainer from './categories/CategoryContainer';

class App extends Component {
    constructor() {
        super();
    }

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
