import './App.scss';
import React, { useEffect, useState } from "react";
import SquaresContainer from "../components/SquaresContainer";
import HoverInfoContainer from "../components/HoverInfoContainer";
import ModeSelectorContainer from "../components/ModeSelectorContainer";
import getAppModes from "../requests/getAppModes";

function App() {
    const [isHoverActive, setIsHoverActive] = useState(false);
    const [appModes, setAppModes] = useState({});
    const [selectedSize, setSelectedSize] = useState(0);
    const [squaresState, setSquaresState] = useState([]);

    useEffect(() => {
        getAppModes().then(setAppModes);
    }, []);

    useEffect(() => {
        const squaresData = new Array(selectedSize * selectedSize).fill().map((_, index) => ({
            row: Math.ceil((index + 1) / selectedSize),
            col: index % selectedSize + 1,
            isFilled: false
        }));

        setSquaresState(squaresData);
    }, [selectedSize]);

    const onSquareEnter = (index) => () => {
        if (!isHoverActive) return;

        setSquaresState(state => {
            const newState = JSON.parse(JSON.stringify(state));

            newState[index].isFilled = !newState[index].isFilled;

            return newState;
        })
    }

    return (
        <div className="squares-app squares-app__container">
            <div className="squares-app__flex-item">
                <ModeSelectorContainer
                    modes={appModes}
                    selectedValue={selectedSize}
                    onChange={setSelectedSize}
                    isHoverActive={isHoverActive}
                    setIsHoverActive={setIsHoverActive}
                />
                <SquaresContainer
                    squaresState={squaresState}
                    onSquareEnter={onSquareEnter}
                />
            </div>
            <div className="squares-app__flex-item">
                <HoverInfoContainer
                    squaresState={squaresState}
                />
            </div>
        </div>
    );
}

export default App;
