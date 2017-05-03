import React from 'react';
import SvgIcon from './SvgIcon.js';
import SCLogo from '../../assets/svgs/soundcloud-icon.svg';
import {autobind} from '../utils.js';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
        autobind(['onSearchTextChange'], this);
    }

    onSearchTextChange(evt) {
        this.setState({ searchText: evt.currentTarget.value });
    }

    render() {
        return (
            <header className="flex hz jc ac header-container">
                <div className="flex hz ac brand-container">
                    <SvgIcon glyph={SCLogo} width="28px" height="28px" />
                    <span className="white title">SoundMobx</span>
                </div>
                <div className='search-bar-container'>
                    <input type='text' placeholder='Search' className='search-input' value={this.state.searchText} onChange={this.onSearchTextChange} />
                </div>
            </header>
        );
    }
}
