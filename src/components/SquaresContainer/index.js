import './index.scss';
import React from 'react';
import Square from "../Square";

const SquaresContainer = ({ squaresState, onSquareEnter }) => {
    if (!squaresState.length) return null;

    return (
        <div
            className="squares squares__container"
            style={{ '--size': Math.sqrt(squaresState.length) }}
        >
            {squaresState.map((square, index) => (
                <Square
                    key={`row${square.row}col${square.col}`}
                    isFilled={square.isFilled}
                    onMouseEnter={onSquareEnter(index)}
                />
            ))}
        </div>
    );
};

export default SquaresContainer;