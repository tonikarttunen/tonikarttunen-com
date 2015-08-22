// app.js

import 'babel/polyfill';
import React from 'react/addons';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Root from './components/Root';
import MenuAPI from './api/MenuAPI';
import FastClick from 'fastclick';
import $ from 'jquery';

function run() {
  // Render the top-level React component
  const rootElement = document.getElementById('root');
  const history = new BrowserHistory();

  MenuAPI.getMenuData();

  React.render(<Root history={history}/>, rootElement);

  React.initializeTouchEvents();    // Configure React's event system to handle touch events
  FastClick.attach(document.body);  // Disable 300ms click delay on touchscreen devices
  $('body').bind('touchstart', function() {});  // Enable hover effects on touch screen devices
}

// Run the application when both DOM is ready
// and page content is loaded
Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  })
]).then(run);
