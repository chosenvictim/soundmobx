import React from 'react';
import SvgIcon from './SvgIcon.js';
import HeartIcon from '../../assets/svgs/favorite-heart-button.svg';
import PlayIcon from '../../assets/svgs/play-button.svg';

export default function TrackItem(props) {
    const {origin} = props.track;
    return (
        <li className='flex hz pointer track-item' onClick={props.onClick}>
            <div className='artwork-image'>
                <img src={origin.artwork_url} width='100%' height='100%' />
            </div>
            <div className='flex vr ab sb track-details'>
                <span>{origin.title}</span>
                <span className='tag'>{origin.genre}</span>
                <div className='flex hz sb track-meta'>
                    <button className='flex ac like-count-button'>
                        <SvgIcon glyph={HeartIcon} width='10px' height='10px' />
                        <span className='span-margin lr'>{origin.likes_count}</span>
                    </button>
                    <div className='playback-count'>
                        <SvgIcon glyph={PlayIcon} width='10px' height='10px' />
                        <span className='span-margin lr small-text'>{origin.playback_count}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}
