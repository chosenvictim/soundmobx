import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import Browse from './components/Browse.js';
import Callback from './components/Callback.js';
import NotFound from './components/NotFound.js';

export default () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Browse}/>
            <Route path="/callback" component={Callback} />
            <Route path="*" component={NotFound} />
        </Route>
    );
}