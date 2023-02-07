import React, { Component } from "react";
import Header from "./components/Header";
import Parent from "./components/Parent";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
import Footer from "./components/Footer";
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: 1, firstName: "Brad", lastName: "Pitt" },
      theme: THEMES.LIGHT,
    };
  }
  setTheme = (theme) => this.setState({ theme });
  render() {
    const { user, theme } = this.state;
    return (
      <ThemeContext.Provider value={[theme, this.setTheme]}>
        <UserContext.Provider value={user}>
          <Header />
          <Parent />
          <Footer />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
export default App;
