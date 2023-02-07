import React from 'react';
import { WithUser } from '../HOC';

const Footer = (props) => {
  const {user} = props;
  return (
    <footer>
      {user.lastName}
    </footer>
  );
}

export default WithUser(Footer);
