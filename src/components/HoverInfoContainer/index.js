import './index.scss';
import React from 'react';
import InfoCard from "../InfoCard";

const HoverInfoContainer = ({ squaresState }) => {
    const cards = squaresState.filter(square => square.isFilled);

    return (
        <div className="hover-info hover-info__container">
            <h3 className="hover-info__title">
                Hover squares
            </h3>
            <div className="hover-info__cards-container">
                {cards.map((data, index) => (
                    <InfoCard
                        key={index}
                        data={data}
                    />
                ))}
            </div>
        </div>
    );
};

export default HoverInfoContainer;