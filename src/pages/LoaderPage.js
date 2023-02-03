import React, { Component } from 'react';
import {Outlet} from 'react-router-dom';

class LoaderPage extends Component {
  render() {
    return (
      <Outlet />
    );
  }
}

export default LoaderPage;
