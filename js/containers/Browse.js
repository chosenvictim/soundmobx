import React from 'react';
import { observer, inject } from 'mobx-react';
import { DEFAULT_GENRE } from '../constants/genre';
import * as actions from '../actions/browseActions.js';
import {autobind} from '../services/utils.js';

@inject('tracksStore') @observer
class Browse extends React.Component {
    constructor(props) {
        super(props);
        autobind([
            'renderTrack'
        ], this);
    }

    componentDidMount() {
        this.fetchTracksByGenre()
    }

    fetchTracksByGenre() {
        const { location } = this.props;
        const genre = location.query.genre || DEFAULT_GENRE;
        actions.fetchTracksByGenre(undefined, genre);
    }

    renderTrack(track, idx) {
        return (
            <li key={idx}>
                <span>track.title</span>
            </li>
        );
    }

    render() {
        const { tracksStore } = this.props;
        console.log(tracksStore.getByGenre(DEFAULT_GENRE));
        return(
            <ul className="tracks-container">
                {
                    // tracksStore.getByGenre(DEFAULT_GENRE).map((track, idx) => this.renderTrack(track, idx))
                }
            </ul>
        );
    }
}

export default Browse;
