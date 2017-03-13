import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.js';
import Browse from './containers/Browse.js';

export default () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Browse}/>
        </Route>
    );
}