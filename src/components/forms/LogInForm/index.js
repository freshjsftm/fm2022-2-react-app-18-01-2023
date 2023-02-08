import React from "react";
import { Form, Formik } from "formik";
import { LOG_IN_SCHEMA } from "../../../utils/validationSchemas";
import InputWrapper from "../InputWrapper";
import InputWrapperWithValidate from "../InputWrapperWithValidate";
import styles from "./LogInForm.module.scss";

const initialValues = {
  login: "",
  password: "",
  number: 1,
};
const LogInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.group();
    console.log(values);
    console.log(formikBag);
    console.groupEnd();
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={LOG_IN_SCHEMA}
    >
      {(formikProps) => {
        //console.log(formikProps);
        return (
          <Form className={styles.form}>
            <InputWrapperWithValidate
              name="login"
              type="text"
              placeholder="your login"
              className={styles.labelValid}
            />
            <InputWrapper
              name="number"
              type="number"
              step="5"
              placeholder="your number"
              className={styles.label}
            />
            <InputWrapper
              name="password"
              type="password"
              placeholder="your password"
              className={styles.label}
            />
            <input type="submit" value="SEND" />
          </Form>
        );
      }}
    </Formik>
  );
};
export default LogInForm;
