import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase';

// Components
import DateTime from './DateTime';
import Focus from './focus/Focus';
import CategoryContainer from './categories/CategoryContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'Good evening',
            focus: '',
            showFocusInput: true,
            focusInputStriked: false,
        };
    }
    //how to add items to an array in state
    //grab the current state of the array you are trying to change and save as a variable
    //push the new item on to that array (variable)
    //this.setState( tasks is equal to new array
    //)

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

    handleFocusBoxChecked = () => {
        this.setState({
            focusInputStriked: !this.state.focusInputStriked,
        });
        console.log(this.state.focusInputStriked);
        return this.state.focusInputStriked;
    };

    render() {
        return (
            <main className="App">
                <DateTime />
                <Focus
                    value={this.state.focus}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    showInput={this.state.showFocusInput}
                    focusButtonClick={this.handleFocusButtonClick}
                    focusBoxChecked={this.handleFocusBoxChecked}
                    focusInputStriked={this.state.focusInputStriked}
                />

                <CategoryContainer />
            </main>
        );
    }
}

export default App;
