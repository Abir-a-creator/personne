import React, { Component } from 'react';

export default class Counter extends Component {

    state = { time: 0}

    tickHandler=()=>{
        this.setState({
           time:this.state.time+1 
        })
        return this.state.time;
    }

    componentDidMount(){
        var timer = setInterval(this.tickHandler,1000)
        this.setState({
            time:timer
        })
    }

    render() {
        const displayTime = () => {
          if (this.state.time < 60) {
              return this.state.time + 'Second(s)'
          }  

          const SS = this.state.time % 60;
          const MM = ((this.state.time / 60) % 60).toFixed(0);
          const HH = (this.state.time / (60 * 60)).toFixed(0);
          return `$(HH):$(MM):$(SS)`;
        }

        return (
            <div>
                <span>{this.state.time}</span>
            </div>
        )
    }
}