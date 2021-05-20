import './index.scss';
import React from 'react';
import classNames from "classnames";

const Square = ({ isFilled, onMouseEnter }) => {
        return (
        <div
            className={classNames({
                'square': true,
                'square_filled': isFilled
            })}
            onMouseEnter={onMouseEnter}
        />
    );
};

export default Square;