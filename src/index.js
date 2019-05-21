import React from 'react';
import ReactDOM from 'react-dom';
import QuizContainer from './QuizContainer.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<QuizContainer />, document.getElementById('root'));


serviceWorker.unregister();
