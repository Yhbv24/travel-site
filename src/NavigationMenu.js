import React, { Component } from 'react';
import nav_menu from './nav_menu.css';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li>Log In</li>
          <li>Sign Up</li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu;
