import React from 'react';
import {autobind} from '../utils.js';

import SvgIcon from './SvgIcon.js';
import PreviousTrackIcon from '../../assets/svgs/previous-track.svg';
import PlayIcon from '../../assets/svgs/play-button.svg';
import NextTrackIcon from '../../assets/svgs/next-track.svg';

export default class Player extends React.Component {
    constructor(props) {
        super(props);
        autobind(['onPreviousClick', 'onTogglePlayClick', 'onNextClick'], this);
    }

    onPreviousClick() {

    }

    onTogglePlayClick() {

    }

    onNextClick() {

    }

    render() {
        const {origin} = this.props.track;
        return (
            <div className="flex hz jc ac player-container">
                <div className='flex hz sb controls'>
                    <SvgIcon className='pointer' glyph={PreviousTrackIcon} width='20px' height='20px' onClick={this.onPreviousClick}/>
                    <SvgIcon className='pointer' glyph={PlayIcon} width='20px' height='20px' onClick={this.onTogglePlayClick}/>
                    <SvgIcon className='pointer' glyph={NextTrackIcon} width='20px' height='20px' onClick={this.onNextClick}/>
                </div>
                <div className='progress-bar'>
                </div>
                <div className='flex hz ac song-info'>
                    <img src={origin.artwork_url} width='40px' height='100%' />
                    <span className='span-margin lr small-text'>{origin.title}</span>
                </div>
            </div>
        );
    }
}
