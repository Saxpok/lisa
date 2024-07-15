import React, { useEffect, useState } from "react";
import "./MainButton.style.css";
import { makePurchase } from "../../api/buyRequest/buyRequest";

const MainButton = () => {
    const [marginTop, setMarginTop] = useState('64vh')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setMarginTop('93vh');
            } else {
                setMarginTop('64vh');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div 
            className="mainButton"
            style={{
                marginTop, transition: 'margin-top 0.5s ease'
            }}
        >
            <button 
            className="pinkButton"
            onClick={makePurchase}
            >
                Придбати зі знижкою 75%
            </button>
        </div>
    )
}

export default MainButton