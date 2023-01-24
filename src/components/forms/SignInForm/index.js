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
  inputHandler = ({ target: { name, value } }) =>
    this.setState({ [name]: value, [`is${name}Valid`]: !value.includes(" ") });
  render() {
    const { email, password, isemailValid, ispasswordValid } = this.state;
    //const emailClasses = [styles.input];
    // if(isemailValid===false){
    //   emailClasses.push(styles.invalid)
    // }
    //const passClasses = [styles.input];
    // if(ispasswordValid===false){
    //   passClasses.push(styles.invalid)
    // }
    const emailClasses = getClasses({
      [styles.input]:true,
      [styles.invalid]: !isemailValid
    })
    const passClasses = getClasses({
      [styles.input]:true,
      [styles.invalid]: !ispasswordValid
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
/*
{
  ім'яКласу: умоваЗастосування
}
*/
function getClasses(objClasses){
  return Object.entries(objClasses)
          .filter(([className, condition])=>condition)
          .map(([className, condition])=>className)
          .join(' ');
}