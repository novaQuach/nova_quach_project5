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
        const audio = new Audio(`${process.env.PUBLIC_URL}/kawhi_laugh.mp3`);
        audio.play();

        const sheet = document.createElement('style');
        sheet.innerHTML = `.categoryBoxWrapper { background-image: url(${process.env.PUBLIC_URL}/kawhi.jpg); background-size: cover; } .catTitle,.catTitleInput { color: #ffffff; }`;
        document.body.appendChild(sheet);
    };

    render() {
        return (
            <main className="App">
                <DateTime />
                <FocusContainer />
                <CategoryContainer />
                <Nova />
                <Konami action={this.easterEgg}></Konami>
                
            </main>
        );
    }
}

export default App;
