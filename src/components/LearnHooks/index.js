import React, { useState } from "react";

const LearnHooks = (props) => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    count:0
  });
  const handlerMove = (event) => {
    setState({
      ...state,
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handlerClick = ()=>{setState({...state,count:state.count+1})}
  return (
    <div style={{ height: "95vh" }} onMouseMove={handlerMove} onClick={handlerClick}>
      <p>x: {state.x}</p>
      <p>y: {state.y}</p>
      <p>count: {state.count}</p>
    </div>
  );
};

export default LearnHooks;
