import React, { useContext, useState, useEffect, useCallback, useMemo } from "react";
import UserProfile from "../components/UserProfile";
import CONSTANTS from "../constants";
import { ThemeContext } from "../contexts";
const { THEMES } = CONSTANTS;

const styleMap = {
  [THEMES.LIGHT]:{color:'#222', backgroundColor:'#eee'},
  [THEMES.DARK]:{color:'#eee', backgroundColor:'#222'}
};

const HomePage = (props) => {
  const [value, setValue] = useState(10);
  const [theme] = useContext(ThemeContext);
  const currentStyle = styleMap[theme];
  const handlerValue = useCallback(({target:{value}})=>{setValue(Number(value))},[])
  const handlerClick = useCallback(()=>{console.log(value)}, [value])
  // useEffect(()=>{
  //   console.log('useEffect')
  // }, [handlerValue])
  return (
    <section style={currentStyle}>
      <UserProfile />
      <br/>
      <div>
        <h3>value = {value}</h3>
        <input type="number" value={value} onChange={handlerValue}/>
      </div>
      <br/>
      <div>
        <button onClick={handlerClick}>log value</button>
      </div>
      <br/>
    </section>
  );
};

export default HomePage;
