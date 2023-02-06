import React, { Component } from 'react';
import { UserContext } from '../../contexts';

class Header extends Component {
  render() {
    const user = this.context;
    return (
      <div>
        hi,{user.firstName}
      </div>
    );
  }
}

Header.contextType = UserContext;

export default Header;
