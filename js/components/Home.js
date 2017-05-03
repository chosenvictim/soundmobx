import React from 'react';
import ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';

import TrackItem from './TrackItem.js';
import {auth} from '../actions/tracksActions.js';
import { CLIENT_ID } from '../constants.js';

@inject('tracksStore', 'userStore') @observer
class Home extends React.Component {
    componentDidMount() {
        auth();
    }

    componentDidUpdate() {
        const audioElement = ReactDOM.findDOMNode(this.refs.audio);
        if(!audioElement) return;
        if(this.props.tracksStore.activeTrack)
            audioElement.play();
        else
            audioElement.pause();
    }

    render() {
        const { tracksStore } = this.props;
        return(
            <div className='white-bg'>
                <ul className="tracks-container">
                    {
                        tracksStore.tracks.map((track, idx) => <TrackItem key={idx} track={track} onClick={() => this.props.tracksStore.playTrack(track)} />)
                    }
                </ul>
                {
                    tracksStore.activeTrack &&
                    <div>
                        <audio id='audio' ref='audio' src={`${tracksStore.activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}></audio>
                    </div>
                }
            </div>
        );
    }
};

export default Home;
