import React, { Component } from 'react';

class DateTime extends Component {
    constructor() {
        super();
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const date = this.state.date;
        return (
            <div className="dateTime">
                <time className="date">{date.toDateString()}</time>
                <time className="time">{date.toLocaleTimeString()}</time>
            </div>
        );
    }
}

export default DateTime;
