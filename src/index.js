import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, browserHistory } from 'react-router';

import '../styles/index.scss';
import * as stores from './stores';
import routes from './routes.js';

ReactDOM.render(
    <Provider {...stores}>
        <Router history={browserHistory}>
            {routes()}
        </Router>
    </Provider>, document.getElementById('root')
);
