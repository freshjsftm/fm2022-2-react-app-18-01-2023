import React, { Component } from "react";
import cx from "classnames";
import styles from "./SignInForm.module.css";

const initialValues = {
  email: "",
  isemailValid: true,
  password: "",
  ispasswordValid: true,
  login:'',
  isloginValid: true,
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }
  formHandler = (event) => {
    event.preventDefault();
    console.log(this.state); //
    event.target.reset();
    this.setState({ ...initialValues });
  };
  inputHandler = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  render() {
    const { email, password, isemailValid, ispasswordValid, login, isloginValid } = this.state;
    const emailClasses = cx(styles.input, {
      [styles.invalid]: !isemailValid,
    });
    const passClasses = cx(styles.input, {
      [styles.invalid]: !ispasswordValid,
    });
    const loginClasses = cx(styles.input, {
      [styles.invalid]: !isloginValid
    })
    return (
      <form className={styles.form} onSubmit={this.formHandler}>
        <input
          value={email}
          onChange={this.inputHandler}
          className={emailClasses}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          value={login}
          onChange={this.inputHandler}
          className={loginClasses}
          type="text"
          name="login"
          placeholder="login"
        />
        <input
          value={password}
          onChange={this.inputHandler}
          className={passClasses}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="send" />
      </form>
    );
  }
}

export default SignInForm;
