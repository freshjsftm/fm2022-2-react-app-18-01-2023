import React, { Component } from "react";
import styles from "./SignInForm.module.css";

const initialValues = {
  email: "",
  password: "",
  isemailValid: false,
  ispasswordValid: false,
};
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }
  formHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({ ...initialValues });
  };
  // emailHandler = ({target:{value}}) => this.setState({email:value})
  // passwordHandler = ({target:{value}}) => this.setState({password:value})
  inputHandler = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;
    const emailClasses = `${styles.input} ${
      isemailValid ? styles.valid : styles.invalid
    }`;
    const passClasses = `${styles.input} ${
      ispasswordValid ? styles.valid : styles.invalid
    }`;
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
