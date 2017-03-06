import React from 'react';
import { Route } from 'react-router';
import App from './containers/App.js';

export default () => {
    return (
        <Route path="/" component={App}></Route>
    );
}