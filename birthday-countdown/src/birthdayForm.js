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
        this.renderStuff=this.renderStuff.bind(this);
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

    renderStuff() {
        if(this.state.formCompleted) {
            return ( <h2> showing countdown timer</h2> )
        } else {
            return ( <h2> form has not been completed. not showing coundown timer</h2>)
        }
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

                { this.renderStuff() }

            </div>
        )
    }
}


export default BirthdayForm;