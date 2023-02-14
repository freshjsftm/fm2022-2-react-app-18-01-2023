import React, { useState, useEffect } from "react";
import { format, addSeconds } from "date-fns";

const FuncStopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRuning, setIsRuning] = useState(false);

  const handlerStart = () => {
    setIsRuning(true);
  };
  const handlerStop = () => {
    setIsRuning(false);
  };

  const handlerReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRuning(false);
  };

  useEffect(() => {
    console.log('useEffect')
    if (isRuning===true) {
      console.log('if set interval')
      const intervalId = setInterval(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
      //clenear interval
      return () => {
        clearInterval(intervalId);
        console.log('if clear interval')
      };
    }
  }, [isRuning]);

  return (
    <section>
      <h2>{format(time, "HH:mm:ss")}</h2>
      <button onClick={handlerStart}>start</button>
      <button onClick={handlerStop}>stop</button>
      <button onClick={handlerReset}>reset</button>
    </section>
  );
};

export default FuncStopWatch;
