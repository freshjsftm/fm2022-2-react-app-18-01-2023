import React from "react";
import Container from "./components/Grid/Container";
import Row from "./components/Grid/Row";
import Col from "./components/Grid/Col";
import ImageWrapper from "./components/ImageWrapper";

//реалізувати компонент ImageWrapper
function App(props) {
  return (
    <>
      <Container>
        <Row>
          <Col colNum={6}>
            <ImageWrapper height="50vh" >
              <img src="https://media.wired.com/photos/5bb6accf0abf932caf294b18/master/pass/waves-730260985.jpg" alt="sea"/>
            </ImageWrapper>
          </Col>
          <Col colNum={6}>
            <ImageWrapper  height="50vh">
              <img src="https://media.wired.com/photos/5bb6accf0abf932caf294b18/master/pass/waves-730260985.jpg" alt="sea"/>
            </ImageWrapper>
          </Col>
        </Row> 
      </Container>
    </>
  );
}

export default App;
