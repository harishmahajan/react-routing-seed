import React from 'react';
import logo from './assets/images/logo.svg';

import Sidenav from './Sidenav';
import PropTypes from 'prop-types';
import './assets/css/App.css';

const App = ({ children }) => {
  return (
    <div>
        <div>
          <div> 
            <img src={logo} className="App-logo" alt="logo" />
          </div>      
          <div>
            <Sidenav />
          </div>
        </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default App;
