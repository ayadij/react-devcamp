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
                <div> DAYS {data.days} </div>
                <div> HRS {data.hours} </div>
                <div> MINS {data.minutes} </div>
                <div> SECS {data.seconds} </div>
            </div>
        )
    }
    
    componentDidMount() {
        this.birthday =  this.props.birthdayFormState.startDate.toString(); //never needs to re-render DOM so no need to be in state
        alert(this.birthday);

    }
}

export default Clock;