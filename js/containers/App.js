import React from 'react';
import Header from '../components/Header.js';
import Player from '../components/Player.js';

export default function App(props) {
    return (
        <div className="app-container">
            <Header />
            {props.children}
            <Player />
        </div>
    );
}
