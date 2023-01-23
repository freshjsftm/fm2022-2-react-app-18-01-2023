import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
  }
  tick = () => {
    this.setState({ count: this.state.count + 1 });
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
    this.setState({ count: 0 });
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
    const { count } = this.state;
    return (
      <div>
        <h2>count: {count}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default StopWatch;
