import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

import './App.css';

import routesConfig from './routesConfig';

class App extends Component {

  render() {
    return (
      <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#76ACFF'}}>
        <div style={{width: '15%', display: 'flex', justifyContent: 'space-between'}}>
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/profile">Profile</Link>
        </div>
        {routesConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          />
        })}
      </div>
    );
  }
}

export default App;
