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
            focus: '',
            showFocusInput: true,
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

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showFocusInput: false });
    };

    handleFocusButtonClick = () => {
        this.setState({ focus: '', showFocusInput: true });
    };

    render() {
        return (
            <div className="App">
                <DateTime />
                <Focus
                    value={this.state.focus}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    showInput={this.state.showFocusInput}
                    onClick={this.handleFocusButtonClick}
                />
            </div>
        );
    }
}

export default App;
