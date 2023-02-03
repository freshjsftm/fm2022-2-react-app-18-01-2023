import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step:1
    }
  }
  handlerStep = ({target:{value}})=>{
    this.setState({step:Number(value)})
  }
  render() {
    const {step} = this.state;
    return (
      <section>
        <div>
          <input type="range" value={step} onChange={this.handlerStep}
          min="1" max="20" step="3"/>
          step: {step}
        </div>
        <Counter step={step}/>
      </section>
    );
  }
}

export default CounterPage;
