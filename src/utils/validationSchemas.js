import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string().trim().matches(/^[A-Z][a-z]{4,15}$/, 'Must be only latin letter').required("Required!");

export const PASS_SCHEMA = Yup.string().trim().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/).required("Required!");

export const LOG_IN_SCHEMA = Yup.object({
  login: Yup.string().trim().matches(/^[a-z]{4,15}$/, 'Must be only latin lowercase letter').required("Required!"),  
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