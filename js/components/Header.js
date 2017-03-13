import React from 'react';
import SvgIcon from './SvgIcon.js';
import SCLogo from '../../assets/svgs/soundcloud-icon.svg';

export default function Header() {
    return (
        <header className="header-container">
            <div className="flex hz ac brand-container">
                <SvgIcon glyph={SCLogo} width="28px" height="28px" />
                <span className="white">SoundMobx</span>
            </div>
        </header>
    );
}
