import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Dyna from './Dyna';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dyna />, document.getElementById('root'));
registerServiceWorker();
