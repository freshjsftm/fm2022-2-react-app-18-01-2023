import React, { useState } from "react";
import FuncStopWatch from "./components/FuncStopWatch";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const handlerIsVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handlerIsVisible}>swich visible</button>
      {isVisible && <FuncStopWatch />}
    </>
  );
}
export default App;
