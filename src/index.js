import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Quiz />, document.getElementById('root'));


serviceWorker.unregister();
