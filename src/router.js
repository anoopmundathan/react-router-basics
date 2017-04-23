import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import About from './components/About';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router>
    <div>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/teachers" component={Teachers} />
        <Route path="/courses" component={Courses} />
        <Route path="*" component={NotFound} />
      </App>
    </div>
  </Router>
);

export default routes;