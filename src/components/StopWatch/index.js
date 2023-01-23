import React, { Component } from "react";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervalId = null;
    //this.start()
    console.log("constructor");
  }
  start = () => {
    this.intervalId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.start();
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.intervalId);
  }
  render() {
    console.log("render");
    const { count } = this.state;
    //this.start()
    //this.setState({ count: Math.random() });
    return (
      <div>
        <h2>count: {count}</h2>
        <button onClick={this.start}>start</button>
      </div>
    );
  }
}

export default StopWatch;
