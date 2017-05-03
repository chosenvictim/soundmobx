import React from 'react';
import ReactDOM from 'react-dom';
import { inject, observer } from 'mobx-react';
import {auth} from '../actions/browseActions.js';
import {autobind} from '../utils.js';
import { CLIENT_ID } from '../constants.js';

@inject('tracksStore', 'userStore') @observer
class Browse extends React.Component {
    constructor(props) {
        super(props);
        autobind([
            'renderTrack'
        ], this);
    }

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

    renderTrack(track, idx) {
        return (
            <li key={idx}>
                <span>{track.origin.title}</span>
                <button type='button' onClick={() => this.props.tracksStore.playTrack(track)}>Play</button>
            </li>
        );
    }

    render() {
        const { tracksStore } = this.props;
        return(
            <div>
                <h4>Welcome to SoundMobx</h4>
                <ul className="tracks-container">
                    {
                        tracksStore.tracks.map((track, idx) => this.renderTrack(track, idx))
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

export default Browse;
