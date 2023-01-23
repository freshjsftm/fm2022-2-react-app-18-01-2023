import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }
  tick = () => {
    // const { time } = this.state;
    // const newTime = new Date(time);
    // newTime.setSeconds(newTime.getSeconds() + 1);
    this.setState((state, props) => {
      const { time } = this.state;
      const newTime = new Date(time);
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };
  start = () => {
    if (this.intervalId === null) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };
  componentDidMount() {
    //для побочних ефектів!!!
    //this.start();
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    //для очистки від побочних ефектів!!!
    this.stop();
  }
  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>{time.toLocaleTimeString("en-GB")}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default StopWatch;
