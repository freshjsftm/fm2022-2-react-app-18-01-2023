import React from "react";
import FlexContainer from "./components/FlexContainer";
import Ciao from './components/CiaoSection/Ciao';

//реалізувати компонент FlexContainer
function App(props) {
  return (
    <>
      <FlexContainer justContent="space-between" alignItem="center" flexDir="column" style={{border:'5px solid red', margin: '20px auto'}} title="title" data-ref="qwerty">
        <Ciao username='Tom'/>
        <Ciao username='Tom'/>
        <Ciao username='Tom'/>
      </FlexContainer>
      <FlexContainer justContent="center" alignItem="start" flexWrap="wrap">
        <Ciao username='Tom'/>
        <Ciao username='Tom'/>
        <Ciao username='Tom'/>
      </FlexContainer>
    </>
  );
}

export default App;
