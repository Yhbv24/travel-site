import React, { Component } from 'react';
import nav_menu from './nav_menu.css';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
  render() {
    return(
      <nav>
        <ul>
          <Link to="/"><li id="home">Home</li></Link>
          <li>Log In</li>
          <li>Sign Up</li>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu;
