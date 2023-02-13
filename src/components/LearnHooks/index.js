import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handlerClick = () => {
      setCount((prevCount) => prevCount + 1);
      //setCount(count + 1); //- так не працює!!!
    };
    //add effect componentDidMount []
    console.log("add effect");
    document.body.addEventListener("click", handlerClick);
    return () => {
      //clean effect componentWillUnmount []
      console.log("clean effect");
      document.body.removeEventListener("click", handlerClick);
    }; // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
};

export default LearnHooks;
