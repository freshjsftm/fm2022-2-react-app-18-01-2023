import React from "react";
import LogInForm from "./components/forms/LogInForm";
import { LOG_IN_SCHEMA } from "./utils/validationSchemas";

function App() {
  const userDataLogIn = {
    login: "qwerty",
    password: "gr3at@3wdsG",
  };
  console.log(
    LOG_IN_SCHEMA.validate(userDataLogIn)
      .then((values) => console.log(values))
      .catch((err)=> console.log(err))
  );
  return (
    <>
      <LogInForm />
    </>
  );
}
export default App;
