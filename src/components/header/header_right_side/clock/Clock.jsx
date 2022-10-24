import React from 'react'
import classes from './Clock.module.css'



class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.showTime(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    showTime() {
        this.setState({
            date: new Date()
        })
    };
    render() {
        return (
            <div>
                <div className={classes.clock}>
                    {this.state.date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className={classes.title}>
                    Time in Dubai
                </div>
            </div>
        );
    }
};

export default Clock