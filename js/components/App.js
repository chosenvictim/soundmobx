import React from 'react';
import { inject, observer } from 'mobx-react';
import Header from './Header.js';
import Player from './Player.js';

@inject('tracksStore') @observer
class App extends React.Component {
    render() {
        const {tracksStore} = this.props;
        return (
            <div className="app-container">
                <Header />
                <div className='content-container'>{this.props.children}</div>
                {
                    tracksStore.activeTrack && <Player track={tracksStore.activeTrack} />
                }
            </div>
        );
    }
}

export default App;
