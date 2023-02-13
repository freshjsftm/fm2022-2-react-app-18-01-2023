import React, { useState } from "react";
import LearnHooks from "./components/LearnHooks";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const handlerIsVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <button onClick={handlerIsVisible}>swich visible</button>
      {isVisible && <LearnHooks />}
    </>
  );
}
export default App;
