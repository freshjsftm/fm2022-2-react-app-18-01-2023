import React, { Component } from 'react';

class LogInForm extends Component {
  render() {
    return (
      <form>
        <input name="login"/>
        <input name="password"/>
      </form>
    );
  }
}

export default LogInForm;
