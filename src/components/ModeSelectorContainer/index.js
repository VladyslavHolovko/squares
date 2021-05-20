import './index.scss';
import React from 'react';
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import toStartCase from "../../utils/toStartCase";

const ModeSelectorContainer = ({ modes, selectedValue, onChange, isHoverActive, setIsHoverActive }) => {
    const handleSelectChange = e => {
        onChange(e.target.value);
        setIsHoverActive(false);
    }

    const handleStartClick = () => {
        setIsHoverActive(state => !state);
    }

    return (
        <div className="mode-selector mode-selector__container">
            <FormControl variant="outlined" className="mode-selector__select">
                <InputLabel id="mode-selector__select-label">Select mode</InputLabel>
                <Select
                    className="mode-selector__selects"
                    label="Select mode"
                    labelId="mode-selector__select-label"
                    onChange={handleSelectChange}
                    value={selectedValue || ''}
                >
                    {Object.entries(modes).map(([key, value]) => (
                        <MenuItem
                            key={key}
                            value={value.field}
                        >
                            {toStartCase(key)}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                className="mode-selector__button"
                variant="contained"
                color={isHoverActive ? 'secondary' : 'primary'}
                onClick={handleStartClick}
            >
                {isHoverActive ? 'Stop' : 'Start'}
            </Button>
        </div>
    );
};

export default ModeSelectorContainer;