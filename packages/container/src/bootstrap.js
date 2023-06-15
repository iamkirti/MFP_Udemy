import React from 'react';
import  ReactDOM  from 'react-dom';
import App from './App';

ReactDOM.render(<App/>,document.querySelector('#root'));
// our container doesn't need a mount function
// whenever the container application is gonna be shown
// inside the browser.
// We always, in all scenarios, want the container to
// show itself immediately.
// It's only our sub-projects that need to export some kind
// of mount function or render themselves conditionally
// depending upon whether or not we are in development.