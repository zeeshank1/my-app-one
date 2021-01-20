import React from 'react';
import './First.css';

class Timer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { seconds : 0 };
    }
    
    tick() {
        this.setState(stateVar => ({ seconds : stateVar.seconds + 1 }));
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render(){
        return (
            <div className='First-div'>
                Seconds : {this.state.seconds}
            </div>
        );
    }
}

export default Timer;