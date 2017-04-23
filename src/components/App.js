import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <span className="icn-logo"><i className="material-icons">code</i></span>
          <ul className="main-nav">
            <li><NavLink to="/" activeClassName = "active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName = "active">About</NavLink></li>
            <li><NavLink to="/teachers" activeClassName = "active">Teachers</NavLink></li>
            <li><NavLink to="/courses" activeClassName = "active">Courses</NavLink></li>
          </ul>       
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;