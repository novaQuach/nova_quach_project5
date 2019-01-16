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

    fetchData = () => {
        // attach event listener to firebase
        this.props.userDbRef.child('focusSection').once('value', (snapshot) => {
            const focusSection = snapshot.val();

            // if statement used to guarad against focusSection being null, when there is a focusSection, we are taking the snapshot from firebase under focusSection and setting it to state.

            if (focusSection) {
                this.setState(focusSection);
            }
        });
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // When props update, check if the userDbRef prop has changed, then fetch new data
        if (prevProps.userDbRef !== this.props.userDbRef) {
            this.fetchData();
        }
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

        this.props.userDbRef.child('focusSection').update({
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

        this.props.userDbRef.child('focusSection').update({
            focus: '',
            showFocusTitle: false,
            showFocusQuestion: true,
            isComplete: false,
        });
    };

    //functional setState will return the currentState of the state properties locally. utilizing that to extract the state of isComplete and flipping it to update firebase, and locally.
    handleFocusBoxChecked = (e) => {
        e.preventDefault();
        this.setState((currentState) => {
            const { isComplete } = currentState;
            const newState = { isComplete: !isComplete };

            this.props.userDbRef.child('focusSection').update(newState);

            return newState;
        });
    };

    render() {
        const { userName } = this.props;

        return (
            <div>
                <Focus
                    value={this.state.focus}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    showFocusTitle={this.state.showFocusTitle}
                    focusButtonClick={this.handleFocusButtonClick}
                    focusBoxChecked={this.handleFocusBoxChecked}
                    isComplete={this.state.isComplete}
                    showFocusQuestion={this.state.showFocusQuestion}
                    userName={userName}
                />
            </div>
        );
    }
}

export default FocusContainer;
