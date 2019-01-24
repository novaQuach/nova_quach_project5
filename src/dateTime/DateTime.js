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
        let HourMinuteString;
        let AmPmString;
        let timeString;
        const date = this.state.date;
        // this is a built in method returns a string that contains the hour: minute : second AM/PM
        const rawTimeString = date.toLocaleTimeString();
        // this is 24 hour clock case
        if (rawTimeString.length < 10) {
            // extracting only the hour and minute from the rawstring.
            timeString = rawTimeString.slice(0, 5);
        } else if (rawTimeString.length == 10) {
            HourMinuteString = rawTimeString.slice(0, 4);
            // extracting the AM/PM part of the raw string
            AmPmString = rawTimeString.slice(8, 11);
            // concatenating the hourminute string with AM/PM string to give what is displayed

            timeString = `${HourMinuteString} ${AmPmString}`;
        } else {
            HourMinuteString = rawTimeString.slice(0, 5);
            AmPmString = rawTimeString.slice(8, 11);
            timeString = `${HourMinuteString} ${AmPmString}`;
        }

        return timeString;
    };

    render() {
        return (
            <div className="dateTime">
                <time className="date">{this.state.date.toDateString()}</time>
                <time className="time">{this.getTimeWithoutSecs()}</time>
            </div>
        );
    }
}
export default DateTime;
