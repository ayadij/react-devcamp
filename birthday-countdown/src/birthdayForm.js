import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class BirthdayForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: moment(),
            formCompleted: false
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleGenerate=this.handleGenerate.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        })
    }

    handleGenerate() {
        this.setState({
            formCompleted: true
        })
    }

    render() {
        return (
            <div>
                <h1>BirthdayForm Component</h1>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <a onClick={this.handleGenerate}>Generate Countdown</a>

            </div>
        )
    }
}


export default BirthdayForm;