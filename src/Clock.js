import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }
    render() {
        return(
            <div>
                <div className="clockDays">{this.leadingZero(this.state.days)} days</div>
                <div className="clockHours">{this.leadingZero(this.state.hours)} hours</div>
                <div className="clockMinutes">{this.leadingZero(this.state.minutes)} minutes</div>
                <div className="clockSeconds">{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        )
    }

    leadingZero = (num) => {
        return (num < 10) ? '0' + num : num;
    };


    getTimeUntil = (deadline) => {
        const date = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((date/1000)%60);
        const minutes = Math.floor(((date/1000)/60)%60);
        const hours = Math.floor((date/(1000*60*60))%24);
        const days = Math.floor(date/(1000*60*60*24));
        this.setState({
            days, hours, minutes, seconds,
        })

    }
}

export default Clock;