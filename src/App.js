import React from "react";
import "./App.css";
import Ciao from "./components/Ciao";

function App() {
  const user = {
    firstName: "Brad",
    lastName: "Pitt",
    avatar: "http://localhost:3000/favicon.ico",
  };
  return (
    <>
      <h1 className="heading" title="JSX">
        Hi, JSX!
      </h1>
      <Ciao
        username={`${user.firstName} ${user.lastName}`}
        photo={user.avatar}
      />
      <Ciao username="Tom Rot" />
      <Ciao username="Steev" />
      <Ciao username="Tom Cruase" />
    </>
  );
}

export default App;
