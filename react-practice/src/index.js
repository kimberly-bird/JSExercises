import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Kimmy from './Kimmy';
import registerServiceWorker from './registerServiceWorker';

// render is like appendChild - append <App /> onto ReactDOM
ReactDOM.render(<Kimmy />, document.getElementById('root'));
registerServiceWorker();
