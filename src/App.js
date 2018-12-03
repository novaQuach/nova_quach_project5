import Konami from 'react-konami-code';
import React, { Component } from 'react';
import './App.scss';

// Components
import DateTime from './dateTime/DateTime';
import FocusContainer from './focus/FocusContainer';
import CategoryContainer from './categories/CategoryContainer';
import Nova from './Nova';

class App extends Component {
    easterEgg = () => {
        alert('Hey, you typed the Konami Code!');
    };

    render() {
        return (
            <main className="App">
                <DateTime />
                <FocusContainer />
                <CategoryContainer />
                <Nova />
                <Konami action={this.easterEgg}> </Konami>
            </main>
        );
    }
}

export default App;
