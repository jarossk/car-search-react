import React from 'react';
import ReactDOM from 'react-dom';
import { BroweserRouter } from 'react-router-dom';

import 'babel-polyfill';
import './index.css';
import App from './containers/SearchApp/App';

const app = (
    <BroweserRouter>
        <App />
    </BroweserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));