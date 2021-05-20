import './index.scss';
import React from 'react';
import Paper from "@material-ui/core/Paper";

const InfoCard = ({ data }) => {
    return (
        <Paper className="info-card info-card__container">
            <div className="info-card__col">
                <span className="info-card__label">
                    row
                </span>
                <span className="info-card__num">
                    {data.row}
                </span>
            </div>
            <div className="info-card__col">
                <span className="info-card__label">
                    col
                </span>
                <span className="info-card__num">
                    {data.col}
                </span>
            </div>
        </Paper>
    );
};

export default InfoCard;