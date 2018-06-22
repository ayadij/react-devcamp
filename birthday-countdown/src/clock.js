import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timeRemaining: this.getTimeRemaining(props.birthdayFormState.startDate.toString())
        }

        this.timer = 0
        this.birthday = props.birthdayFormState.startDate.toString();
        this.getTimeRemaining = this.getTimeRemaining.bind(this);
    }

    getTimeRemaining(birthday) {
        var bday = new Date(birthday)
        let today = new Date();

        var distance = bday.getTime() - today.getTime();

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        return {
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const timeRemaining = this.getTimeRemaining(this.birthday)
            this.setState({ timeRemaining: timeRemaining })
        }, 1000);
    }

    render(){
        const data = this.state.timeRemaining
        return (
            <div>  
                <div> DAYS {data.days} </div>
                <div> HRS {data.hours} </div>
                <div> MINS {data.minutes} </div>
                <div> SECS {data.seconds} </div>
            </div>
        )
    } 

}

export default Clock;