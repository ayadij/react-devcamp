import React, { Component } from 'react';
import App from './App'

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timeRemaining: this.gettimeRemaining(props.birthdayFormState.startDate.toString())
        }

        this.timer = 0
        this.birthday = props.birthdayFormState.startDate.toString();
        this.gettimeRemaining = this.gettimeRemaining.bind(this);
        this.getAge = this.getAge.bind(this);
        this.noBirthYear = new Date(this.birthday).getFullYear() != new Date().getFullYear()
    }

    componentWillReceiveProps(nextProps) {
        console.log(`next props: ${JSON.stringify(nextProps)}`)
    }
    gettimeRemaining(birthday) {
        var bday = new Date(birthday)
        var today = new Date();

        const currentMonth = today.getMonth();
        const birthMonth = bday.getMonth();

        bday.setFullYear(today.getFullYear());

        var distance = bday.getTime() - today.getTime();

        if(birthMonth > currentMonth) {
            bday.setFullYear(today.getFullYear());
        } else if (birthMonth < currentMonth) {
            bday.setFullYear(today.getFullYear() + 1);
        } else if(birthMonth == currentMonth) {
            const birthDay = bday.getDate();
            const currentDay = today.getDate();
            if(birthDay > currentDay) {
                bday.setFullYear(today.getFullYear());
            } else if(birthDay < currentDay) {
                bday.setFullYear(today.getFullYear() + 1);
            }
        }


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


    getAge = function() {
        var bday = new Date(this.birthday);
        let today = new Date();

        var distance = today.getTime() - bday.getTime();
        var daysOld = Math.floor(distance / (1000 * 60 * 60 * 24));
        var yearsOld = Number((daysOld/365).toFixed(0));
        var noBirthYear = new Date(this.birthday).getFullYear() != new Date().getFullYear()

        return yearsOld
    }


    componentDidMount() {
        this.timer = setInterval(() => {
            const timeRemaining = this.gettimeRemaining(this.birthday)
            this.setState({ timeRemaining: timeRemaining })
        }, 1000);
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }


    renderMessage = function() {
        if(this.noBirthYear) {
            return <h4> until your birthday!</h4>
        }
        return <h4>remaining until you are {this.getAge()}</h4>
    }.bind(this)


    render(){
        const data = this.state.timeRemaining
        return (
            <div>
            {
                this.state.timeRemaining == 0 ?
                    <h1>HBD</h1>
                    :
                    <div>
                        <div>
                            <div> DAYS {data.days} </div>
                            <div> HRS {data.hours} </div>
                            <div> MINS {data.minutes} </div>
                            <div> SECS {data.seconds} </div>
                        </div>
                        <div>
                            {<h4>remaining until you are {this.getAge()}</h4>}
                        </div>
                    </div>
            } 
            </div>
        )
    }
}

export default Clock;

//https://rails.devcamp.com/comprehensive-react-development-tutorial/react-project-two-build-birthday-countdown-application/1634

//https://github.com/bottega-code-school/BirthdayCountdownApp?files=1
