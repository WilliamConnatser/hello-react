import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import User from './Components/User';
import Account from './Components/Account';
import Blog from './Components/Blog';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link> |-| 
            <Link to="/account">Account </Link> |-| 
            <Link to="/blog">Blog</Link>
          </div>
          <Route exact path="/" component={User} />
          <Route path="/account" component={Account} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
