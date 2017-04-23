import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Course from './courses/Course';
import CSS from './courses/CSS';
import HTML from './courses/HTML';
import JavaScript from './courses/JavaScript';

class Courses extends Component {
  render() {
    return (
      <div className="main-content courses">
        <div className="course-header group">
          <h2>Courses</h2>
          <ul className="course-nav">
            <li><NavLink to="/courses/html">HTML</NavLink></li>
            <li><NavLink to="/courses/css">CSS</NavLink></li>
            <li><NavLink to="/courses/javascript">JavaScript</NavLink></li>
          </ul>
        </div>
          
          {/*<Redirect from="/courses" to="/courses/html" />*/}
          <Route path="/courses" render={() => (
            <Redirect to="/courses/html" />
          )} />
          <Route path="/courses/html" component={HTML}/>
          <Route path="/courses/css" component={CSS}/>
          <Route path="/courses/javascript" component={JavaScript}/>
      </div>
    );
  }
}

export default Courses;