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

    getTimeWithoutSecs = () => {
        const date = this.state.date;
        // this is a built in method returns a string that contains the hour: minute : second AM/PM
        const rawTimeString = date.toLocaleTimeString();

        // extracting only the hour and minute from the rawstring.
        const HourMinuteString = rawTimeString.slice(0, 5);

        // extracting the AM/PM part of the raw string
        const AmPmString = rawTimeString.slice(8, 11);

        // concatenating the hourminute string with AM/PM string to give what is displayed
        const timeString = `${HourMinuteString} ${AmPmString}`;

        return timeString;
    };

    render() {
        // const date = this.state.date;

        console.log(this.getTimeWithoutSecs());

        return (
            <div className="dateTime">
                <time className="date">{this.state.date.toDateString()}</time>
                <time className="time">{this.getTimeWithoutSecs()}</time>
            </div>
        );
    }
}
export default DateTime;
