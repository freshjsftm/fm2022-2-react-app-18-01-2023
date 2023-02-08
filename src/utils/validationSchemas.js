import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string()
  .trim()
  .min(5, "Must be more 5 letters")
  .max(16, "Must be less 16 letters")
  .matches(/^[A-Z][a-z]{4,15}$/, "Must be only latin letter")
  .required("Required!");

export const PASS_SCHEMA = Yup.string()
  .trim()
  .min(8, "Must be more 8 symbols")
  .max(20, "Must be less 20 symbols")
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/,
    "Check your password"
  )
  .required("Required!");

export const LOG_IN_SCHEMA = Yup.object({
  login: Yup.string()
    .trim()
    .min(4, "Must be more 4 letters")
    .max(15, "Must be less 15 letters")
    .matches(/^[a-z]{4,15}$/, "Must be only latin lowercase letter")
    .required("Required!"),
  password: PASS_SCHEMA,
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  email: Yup.string().trim().email().required("Required!"),
  password: PASS_SCHEMA,
  age: Yup.number().min(18).max(100).integer().required(),
  isMale: Yup.boolean().required(),
});

//gr3at@3wdsG
