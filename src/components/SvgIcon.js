import React from 'react';

export default function SvgIcon(props) {
    const { glyph, ...rest} = props;
    return (
        <svg {...rest}>
            <use xlinkHref={glyph} />
        </svg>
    );
}
