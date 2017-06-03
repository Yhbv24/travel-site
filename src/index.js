import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './Home.js';
import About from './About.js';
import Footer from './Footer.js';

ReactDOM.render(
  <Router history={HashRouter}>
    <div>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </Router>, document.getElementById('root'));
