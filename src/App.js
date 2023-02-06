import React, { Component } from "react";
import Header from "./components/Header";
import Parent from "./components/Parent";
import { UserContext } from "./contexts";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: 1, firstName: "Brad", lastName: "Pitt" }
    };
  }
  render() {
    const {user} = this.state;
    return (
      <UserContext.Provider value={user}>
        <Header />
        <Parent />
      </UserContext.Provider>
    );
  }
}
export default App;
