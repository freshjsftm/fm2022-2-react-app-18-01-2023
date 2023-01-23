import React, {useState} from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
    <button onClick={()=>{setIsVisible(!isVisible)}}>isVisible</button>
      {isVisible?<StopWatch />:null}
    </>
  );
}

export default App;
