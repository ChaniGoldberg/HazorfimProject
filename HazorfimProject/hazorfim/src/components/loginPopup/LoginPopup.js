import React, { useState, useEffect, useRef } from "react";
import '../../styles/LoginPopup.css';

const LoginPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1200);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => document.removeEventListener("click", handleClickOutside);
    }, [isVisible]);

    return (
        isVisible && (
            <div className="popup-overlay">
                <div className="popup-content" ref={popupRef}>
                    <h2>הצטרפות</h2>
                    <form>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    );
};

export default LoginPopup;
