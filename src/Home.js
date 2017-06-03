import React, { Component } from 'react';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import './home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <NavigationMenu />
        <div className="homeContent">
          <div className="homeImage">
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
