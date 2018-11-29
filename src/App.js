import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase';

// Components
import DateTime from './DateTime';
import Focus from './Focus';

class App extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'Good evening',
            focus: 'Finish my Project',
            categories: [
                {
                    title: 'Fitness',
                    tasks: ['drink water', 'yoga'],
                },
            ],
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        console.log(e.target.value);
    };

    render() {
        return (
            <div className="App">
                <DateTime />
                <Focus value={this.state.focus} onChange={this.handleChange} />
            </div>
        );
    }
}

export default App;
