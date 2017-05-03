import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, browserHistory } from 'react-router';

import * as stores from './stores';
import routes from './routes.js';
import '../styles/index.scss';

import { CLIENT_ID, REDIRECT_URI } from './constants.js';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

ReactDOM.render(
    <Provider {...stores}>
        <Router history={browserHistory}>
            {routes()}
        </Router>
    </Provider>, document.getElementById('root')
);
