import React, { Component, useEffect } from "react";
import imgCronometro from "../../../assets/cronometro.png";
import "./timer.css";

class Timer extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      actualTime: 30,
      btnPlayPause: "Play"
    };
    this.initTimer();
    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Play" });
    } else {
      this.counter = setInterval(() => {
        if (this.actualTime === 0) {
          this.pauseTimer();
        }
        this.setState({ actualTime: this.state.actualTime - 0.1 });
      }, 100);
      this.setState({ btnPlayPause: "Pause" });
    }
  }

  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }

  clearTimer() {
    this.setState({ actualTime: 30 });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Play" });
  }

  render() {
    return (
      <div className="timer">
        <div className="time">
          <img src={imgCronometro} alt="Cronometro" />
          <h2>{this.state.actualTime.toFixed(2)}</h2>
        </div>
      </div>
    );
  }
}

export default Timer;
