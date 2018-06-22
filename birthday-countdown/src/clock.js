import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timeRemaining: {}
        }
    }

    render(){
        const data = this.state.timeRemaining
        return (
            <div>  
                <label> DAYS: {data.days} </label>
                <label> HOURS: {data.hours} </label>
                <label> MINUTES: {data.minutes} </label>
                <label> SECONDS: {data.seconds} </label>
            </div>
        )
    }
}

export default Clock;