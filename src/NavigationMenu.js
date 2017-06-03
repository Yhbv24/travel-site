import React, { Component } from 'react';
import nav_menu from './nav_menu.css';
import { Link } from 'react-router-dom';

class NavigationMenu extends Component {
  render() {
    return(
      <nav>
        <ul>
          <Link to="/"><li id="home">Home</li></Link>
          <li id="login">Log In</li>
          <li id="signup">Sign Up</li>
          <Link to='/about'><li id="about">About</li></Link>
        </ul>
      </nav>
    )
  }
}

export default NavigationMenu;
