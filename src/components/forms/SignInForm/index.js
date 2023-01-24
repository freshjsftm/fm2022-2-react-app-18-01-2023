import React, { Component } from 'react';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  formHandler = (event)=>{
    event.preventDefault();
    console.log(event)
  }
  
  render() {
    return (
      <form className={styles.form} onSubmit={this.formHandler}>
        <input type='email' name='email' placeholder='email'/>
        <input type='password' name='password' placeholder='password'/>
        <input type='submit' value='send'/>
      </form>
    );
  }
}

export default SignInForm;
