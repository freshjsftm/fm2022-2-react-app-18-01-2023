import React from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";
import Ciao from "./components/CiaoSection/Ciao";


function App() {
  return (
    <>
      <StopWatch />
      <Ciao username="Brad Pitt" />
    </>
  );
}

export default App;
