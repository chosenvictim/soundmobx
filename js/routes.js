import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import Home from './components/Home.js';
import Callback from './components/Callback.js';
import NotFound from './components/NotFound.js';

export default () => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/callback" component={Callback} />
            <Route path="*" component={NotFound} />
        </Route>
    );
}