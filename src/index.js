import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './Home.js';
import About from './About.js';
import NavigationMenu from './NavigationMenu.js';
import Footer from './Footer.js';

ReactDOM.render(
  <Router history={HashRouter}>
    <div>
      <NavigationMenu />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Footer />
    </div>
  </Router>, document.getElementById('root'));
