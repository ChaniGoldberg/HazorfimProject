


import React, { useContext } from 'react';
import { ThemeContext } from "./globalComponants/ThemeContext";
import "../styles/Try.css";
import Links1 from './nav1/Links1';
import "../styles/Try.css";
import "../styles/Links1.css"
import "../styles/AccountComponent.css"
import "../styles/Branches.css"

const Try = () => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
                Change Background Color
            </button>
        </div>
    );
};

export default Try;
