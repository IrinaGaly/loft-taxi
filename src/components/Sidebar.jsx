import React, { Component } from 'react';
import logo from './../assets/logo.svg';

export class Sidebar extends Component {
  render() {
    return (
      <div className="loft__sidebar">
        <div className="loft__sidebar-wrapper">
          <img src={ logo } className="loft__logo" alt="logo" />
        </div>
      </div>
    )
  }
}
