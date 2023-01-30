import React from "react";
import "./App.css";

const List = (props) => {
  const { title, children } = props;
  return (
    <article title={title}>
      <h2>List</h2>
      {children}
    </article>
  );
};

function App(props) {
  return (
    <>
    <List title="list">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </List>
    <List>
      <ol>
        <li>qwerty</li>
        <li>qwerty</li>
        <li>qwerty</li>
      </ol>
    </List>
    </>
  );
  // const list = React.createElement(
  //   "ul",
  //   {title:'list'},
  //   React.createElement("li", {}, "1"),
  //   React.createElement("li", {}, "2"),
  //   React.createElement("li", {}, "3")
  // );
  // return list;
}

export default App;
