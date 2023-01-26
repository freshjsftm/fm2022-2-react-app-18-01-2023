import React, { Component } from "react";
import { format, add } from "date-fns";
import styles from "./StopWatch.module.css";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
    this.intervalId = null;
  }
  tick = () => {
    this.setState((state, props) => {
      // const { time } = state;
      // const newTime = new Date(time);
      // newTime.setSeconds(newTime.getSeconds() + 1);
      // return { time: newTime };
      return { time: add(state.time, { seconds: 1 }) };
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
    //this.start()
  }
  componentDidUpdate() {
    //console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    this.stop();
  }
  render() {
    const { time } = this.state;
    return (
      <article className={styles.container}>
        <h2>{format(time, "HH mm ss")}</h2>
        {/* <h2>{time.toLocaleTimeString("en-GB")}</h2> */}
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatch;
