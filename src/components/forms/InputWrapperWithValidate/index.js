import React from "react";
import cx from 'classnames';
import { Field } from "formik";
import styles from "./InputWrapperWithValidate.module.scss";

const InputWrapperWithValidate = (props) => {
  const { name, className , ...rest} = props;
  return (
    <label className={className}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const validStyle = cx(styles.input, {
            [styles.valid]:  meta.touched && !meta.error,
            [styles.invalid]: meta.touched && meta.error
          });
          return <input {...field}  className={validStyle} {...rest}/>;
        }}
      </Field>
    </label>
  );
};

export default InputWrapperWithValidate;
