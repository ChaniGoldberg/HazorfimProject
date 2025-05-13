import React, { useState, useEffect } from 'react';
import   "../../styles/ScrollToTopButton.css"; // Import the CSS file

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button 
                    onClick={scrollToTop} 
                    className="scroll-to-top-button"
                >
                    ↑
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
