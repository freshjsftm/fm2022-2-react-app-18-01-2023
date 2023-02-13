import React, { useState } from "react";

const LearnHooks = (props) => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0
  });
  const [count, setCount] = useState(0);
  const handlerMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handlerClick = ()=>{setCount((prevCount)=>prevCount+1)}
  return (
    <div style={{ height: "95vh" }} onMouseMove={handlerMove} onClick={handlerClick}>
      <p>x: {coords.x}</p>
      <p>y: {coords.y}</p>
      <p>count: {count}</p>
    </div>
  );
};
export default LearnHooks;
