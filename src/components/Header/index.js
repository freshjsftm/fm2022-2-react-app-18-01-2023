import React, { Component } from "react";
import { UserContext } from "../../contexts";

class Header extends Component {
  renderUserContext = (user) => <header>hi,{user.firstName}</header>;
  render() {
    return (
      <UserContext.Consumer>{this.renderUserContext}</UserContext.Consumer>
    );
  }
}

export default Header;
