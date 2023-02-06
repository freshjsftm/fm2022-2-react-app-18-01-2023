import React, { Component } from "react";
import Tree from "./components/Tree";
import { UserContext } from "./contexts";
// створити контекст
// надати доступ усім компонентам до контекста
// дістати данні з контексту

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: 1, firstName: "Brad", lastName: "Pitt" }
    };
  }
  render() {
    const {user} = this.state;
    console.log(UserContext);
    return (
      <UserContext.Provider value={user}>
        <Tree />
      </UserContext.Provider>
    );
  }
}

export default App;
