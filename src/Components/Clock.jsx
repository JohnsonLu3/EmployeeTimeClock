import React from 'react';
import "../Style/Clock.scss"
import Months from "../Const/Months"

class Clock extends React.Component {

    intervalID;

    constructor(props) {
        super(props);
        this.state = {
            time: this.getTime(),
            date: this.getDate()
        }

    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.getTime(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock-info">
                    <div className="time"><time>{this.state.time}</time></div>
                    <div className="date">{this.state.date}</div>
                </div>
            </div>
        );
    }

    getTime() {
        var today = new Date();
        var timeString = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        this.setState({
            time: timeString
        })

        return timeString;
    }

     getDate() {
        let today = new Date();
        let months = new Months();
        let dateString = months[today.getMonth()] + " " + today.getDate() + " " + today.getFullYear()

         this.setState({
             date: dateString
         })

        return dateString
    }

}export default Clock;
