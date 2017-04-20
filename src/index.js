// Libs
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

// CSS 
import './css/style.css';

// Components
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import About from './components/About';

// Render
render((
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </Router>
), document.getElementById('root'));