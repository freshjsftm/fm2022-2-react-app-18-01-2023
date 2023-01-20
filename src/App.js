import { Component } from "react";
import "./App.css";
import UserList from "./components/UserList";
//import CiaoSection from "./components/CiaoSection";

class App extends Component {
  // constructor(props) {
  //   super(props);

  // }
  
  render() {
    return <UserList />
  }
}

export default App;

// users.map((user)=>component)
