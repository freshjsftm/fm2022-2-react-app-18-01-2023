import {Component} from "react";
import "./App.css";
import Ciao from "./components/Ciao";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users:[
        {
          id:1,
          firstName: "Brad",
          lastName: "Pitt",
        },
        {
          id:2,
          firstName: "Tom",
          lastName: "Rot",
        },
        {
          id:3,
          firstName: "Jim",
          lastName: "Carry",
        },
        {
          id:4,
          firstName: "Rob",
          lastName: "Qwerty",
        },
        {
          id:5,
          firstName: "Leo",
          lastName: "Kaprio",
        },
      ]
    };
  }
  render() {
    const {users} = this.state;
    return (
      <>
        <h1 className="heading" title="JSX">
          Hi, JSX!
        </h1>
        <Ciao username={`${users[0].firstName} ${users[0].lastName}`}/>
      </>
    );
  }
}

export default App;
