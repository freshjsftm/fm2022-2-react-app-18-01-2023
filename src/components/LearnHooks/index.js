import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(100);
  const handlerStep = ({ target: { value } }) => {
    setStep(Number(value));
  };
  useEffect(() => {
    const handlerClick = () => {
      setCount((count) => count + step);
    };
    document.body.addEventListener("click", handlerClick);
    return () => {
      document.body.removeEventListener("click", handlerClick);
    }; // eslint-disable-next-line
  }, [step]);
  return (
    <div>
      <p>count: {count}</p>
      <input type="number" value={step} onChange={handlerStep} />
    </div>
  );
};

export default LearnHooks;
