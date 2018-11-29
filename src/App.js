import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase';

// Components
import DateTime from './DateTime';
import Focus from './Focus';
import Category from './Category';

class App extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'Good evening',
            focus: '',
            showFocusInput: true,
            focusInputStriked: false,
            showTitle: false,
            categories: [
                {
                    title: 'Fitness',
                    tasks: ['drink water', 'yoga'],
                },
                {
                    title: 'Other Stuff',
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
        this.setState({ showFocusInput: false, showTitle: true });
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

    // <button onClick={this.toggleArt} >Toggle Art </button>
    // { this.state.showArt ? <Art searchParam={this.state.searchParam} /> : <p>click the button to see the art</p> }
    //         </div >

    //     this.setState({
    //   showArt: !this.state.showArt,
    // })
    handleNewCategory = () => {
        console.log('this should lead to a new category');
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
                    focusButtonClick={this.handleFocusButtonClick}
                    focusBoxChecked={this.handleFocusBoxChecked}
                    focusInputStriked={this.state.focusInputStriked}
                />
                <button onClick={this.handleNewCategory}>New Category</button>
                {this.state.categories.map((category) => {
                    return (
                        <Category
                            value={category.title}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            showTitle={this.state.showTitle}
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;
