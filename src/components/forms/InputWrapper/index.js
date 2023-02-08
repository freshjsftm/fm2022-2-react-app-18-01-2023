import React from "react";
import { Field, ErrorMessage } from 'formik';

const InputWrapper = (props) => {
  const {name,placeholder, className} = props;
  return (
    <label className={className}>
      <Field name={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="span" />
    </label>
  );
};

export default InputWrapper;
