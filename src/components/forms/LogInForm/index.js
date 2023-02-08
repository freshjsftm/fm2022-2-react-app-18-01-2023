import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { LOG_IN_SCHEMA } from "../../../utils/validationSchemas";
const initialValues = {
  login: "",
  password: "",
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
          <Form>
            <Field name="login" placeholder="login" />
            <ErrorMessage name="login" component="div" />
            <Field name="password" type="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <Field type="submit" value="SEND" />
          </Form>
        );
      }}
    </Formik>
  );
};
export default LogInForm;
