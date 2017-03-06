import React from 'react';
import Header from '../components/Header.js';

export default function(props) {
    return (
        <div className="app-container">
            <Header />
            {props.children}
        </div>
    );
}
