import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState((state, props) => ({
      count: state.count + props.step,
    }));
  };
  decrement = () => {
    this.setState((state, props) => ({
      count: state.count - props.step,
    }));
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.step === this.props.step;
  }
  render() {
    console.log("render counter");
    const { count } = this.state;
    return (
      <div>
        <h2>counter: {count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

export default Counter;
