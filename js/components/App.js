import React from 'react';
import Header from './Header.js';
import Player from './Player.js';

export default function App(props) {
    return (
        <div className="app-container">
            <Header />
            <div className='content-container'>{props.children}</div>
            <Player />
        </div>
    );
}
