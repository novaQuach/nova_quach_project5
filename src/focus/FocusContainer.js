import React, { Component } from 'react';
import Focus from './Focus';

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

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
        console.log(e.target.value);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showFocusTitle: true, showFocusQuestion: false });
    };

    handleFocusButtonClick = () => {
        this.setState({
            focus: '',
            showFocusTitle: false,
            showFocusQuestion: true,
            isComplete: false,
        });
    };

    handleFocusBoxChecked = () => {
        this.setState({
            isComplete: !this.state.isComplete,
        });
        console.log(this.state.isComplete);
        return this.state.isComplete;
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
