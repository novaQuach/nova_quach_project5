import React, { Component } from 'react';
import Focus from './Focus';
import firebase from '../firebase';

const focusRef = firebase.database().ref('/focusSection');

class FocusContainer extends Component {
    constructor() {
        super();
        this.state = {
            focus: '',
            showFocusTitle: false,
            isComplete: false,
            showFocusQuestion: true,
        };
    }

    componentDidMount = () => {
        focusRef.once('value', (snapshot) => {
            this.setState(snapshot.val());
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        console.log(e.target.value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showFocusTitle: true, showFocusQuestion: false });

        focusRef.update({
            focus: this.state.focus,
            showFocusTitle: true,
            isComplete: false,
            showFocusQuestion: false,
        });
    };

    handleFocusButtonClick = () => {
        this.setState({
            focus: '',
            showFocusTitle: false,
            showFocusQuestion: true,
            isComplete: false,
        });

        focusRef.update({
            focus: '',
            showFocusTitle: false,
            showFocusQuestion: true,
            isComplete: false,
        });
    };

    handleFocusBoxChecked = (e) => {
        focusRef.update({ isComplete: true, focus: 'test' });
        this.setState((currentState) => {
            const { isComplete } = currentState;
            const newState = { isComplete: !isComplete };

            console.log(currentState);
            console.log(newState);

            return newState; //functional setState will return the currentState of the state properties locally. utilizing that to extract the state of isComplete and flipping it to update firebase, and locally.
        });
    };

    render() {
        return (
            <Focus
                value={this.state.focus}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                showFocusTitle={this.state.showFocusTitle}
                focusButtonClick={this.handleFocusButtonClick}
                focusBoxChecked={this.handleFocusBoxChecked}
                isComplete={this.state.isComplete}
                showFocusQuestion={this.state.showFocusQuestion}
            />
        );
    }
}

export default FocusContainer;
