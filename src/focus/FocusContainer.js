import React, { Component } from 'react';
import Focus from './Focus';

class FocusContainer extends Component {
    constructor() {
        super();
        this.state = {
            focus: '',
            showFocusTitle: false,
            isComplete: false,
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
        this.setState({ showFocusTitle: true });
    };

    handleFocusButtonClick = () => {
        this.setState({ focus: '', showFocusTitle: false });
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
            />
        );
    }
}

export default FocusContainer;
