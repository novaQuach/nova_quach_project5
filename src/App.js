import React, { Component } from 'react';
import './App.scss';

// Components
import DateTime from './dateTime/DateTime';
import FocusContainer from './focus/FocusContainer';
import CategoryContainer from './categories/CategoryContainer';
import Nova from './Nova';

class App extends Component {
    render() {
        return (
            <main className="App">
                <DateTime />
                <FocusContainer />
                <CategoryContainer />
                <Nova />
            </main>
        );
    }
}

export default App;
