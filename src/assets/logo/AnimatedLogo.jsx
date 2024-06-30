import React, { useEffect, useRef, useState  } from "react";
import "./animatedLogo.css";

const AnimatedLogo = () => {
    const blueDotRef = useRef(null);
    const logoContainerRef = useRef(null);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const blinkTimeoutRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!blueDotRef.current || !logoContainerRef.current || isMouseOver) return;

            const rect = logoContainerRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2 + 110;
            const centerY = rect.top + rect.height / 2 + 110;
            const mouseX = Math.min(e.clientX + 100,window.innerWidth);
            const mouseY = Math.min(e.clientY + 100,window.innerHeight);

            // Calculate distances to the borders of the window
            const distanceToLeft = mouseX;
            const distanceToRight = window.innerWidth - mouseX;
            const distanceToTop = mouseY;
            const distanceToBottom = window.innerHeight - mouseY;

            // Calculate the smallest distance to any border
            const minDistanceToBorder = Math.min(distanceToLeft, distanceToRight, distanceToTop, distanceToBottom);

            // Calculate the distance between the mouse and the center of the logo
            const distanceX = mouseX - centerX;
            const distanceY = mouseY - centerY;
            const distanceToCenter = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            // Normalize the distance based on the nearest border distance
            const normalizedDistance = Math.min(distanceToCenter / minDistanceToBorder, 1);

            // Calculate the angle between the mouse and the center of the logo
            const angle = Math.atan2(distanceY, distanceX);

            // Calculate the radius for the blue dot movement
            const maxRadius = 70; // Adjust the maximum radius as needed
            const radius = maxRadius * normalizedDistance;

            // Calculate the new position for the blue dot
            const dotX = centerX + radius * Math.cos(angle);
            const dotY = centerY + radius * Math.sin(angle);

            // Convert the dot's position to local coordinates inside the logo container
            const localDotX = dotX - rect.left;
            const localDotY = dotY - rect.top;

            blueDotRef.current.setAttribute('x', localDotX);
            blueDotRef.current.setAttribute('y', localDotY);
        };

        const handleMouseEnter = () => {
            setIsMouseOver(true);
            logoContainerRef.current.classList.add('shaking');
            blueDotRef.current.classList.add('compress');
            blueDotRef.current.classList.remove('decompress');
            clearTimeout(blinkTimeoutRef.current); // Stop blinking
        };

        const handleMouseLeave = () => {
            setIsMouseOver(false);
            logoContainerRef.current.classList.remove('shaking');
            blueDotRef.current.classList.remove('compress');
            blueDotRef.current.classList.add('decompress');
            startBlinking(); // Resume blinking
        };

        window.addEventListener('mousemove', handleMouseMove);
        if (logoContainerRef.current) {
            logoContainerRef.current.addEventListener('mouseenter', handleMouseEnter);
            logoContainerRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        const blink = () => {
            if (!blueDotRef.current || !logoContainerRef.current || isMouseOver) return;
            
            blueDotRef.current.classList.add('compress');

            setTimeout(() => {
                blueDotRef.current.classList.remove('compress');
                blueDotRef.current.classList.add('decompress');
                setTimeout(() => {
                    blueDotRef.current.classList.remove('decompress');
                }, 500);
            }, 500);
        };

        const startBlinking = () => {
            const randomTime = Math.floor(Math.random() * 1000) + 10000; // Random interval between 2-7 seconds
            blinkTimeoutRef.current = setTimeout(() => {
                blink();
                startBlinking();
            }, randomTime);
        };

        startBlinking();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (logoContainerRef.current) {
                logoContainerRef.current.removeEventListener('mouseenter', handleMouseEnter);
                logoContainerRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
            clearTimeout(blinkTimeoutRef.current);
        };
    }, [isMouseOver]);

    return (
        <div className="logo-container" ref={logoContainerRef}>
            <svg 
                id="logo" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 319 389" 
                style={{
                    shapeRendering: 'geometricPrecision', 
                    textRendering: 'geometricPrecision', 
                    imageRendering: 'optimizeQuality', 
                    fillRule: 'evenodd', 
                    clipRule: 'evenodd'
                }}
            >
                <g>
                    <path 
                        style={{ opacity: 0.966 }} 
                        fill="#000000" 
                        d="M 148.5,1.5 C 194.322,-1.39143 234.655,11.7752 269.5,41C 302.458,72.8376 318.458,111.838 317.5,158C 318.319,213.023 296.986,257.023 253.5,290C 225.591,308.077 194.925,317.077 161.5,317C 149.774,323.176 145.607,332.676 149,345.5C 152.03,352.109 157.197,355.942 164.5,357C 166.833,357.333 169.167,357.667 171.5,358C 215.499,358.5 259.499,358.667 303.5,358.5C 303.5,368.167 303.5,377.833 303.5,387.5C 259.165,387.667 214.832,387.5 170.5,387C 159.054,386.711 148.054,384.378 137.5,380C 120.219,368.861 113.385,353.027 117,332.5C 118.495,325.844 121.329,319.844 125.5,314.5C 57.3243,299.123 16.8243,257.123 4,188.5C -3.98594,139.451 6.68072,95.1175 36,55.5C 66.0461,22.0609 103.546,4.06092 148.5,1.5 Z M 147.5,32.5 C 191.222,29.1171 227.722,43.4504 257,75.5C 280.992,108.437 289.325,145.104 282,185.5C 274.246,227.578 251.079,257.744 212.5,276C 178.296,289.454 143.962,289.787 109.5,277C 66.0998,257.094 41.5998,223.261 36,175.5C 30.7175,131.005 43.8841,93.1721 75.5,62C 96.4566,44.6868 120.457,34.8534 147.5,32.5 Z"
                    />
                </g>
                <g>
                    <rect
                        id="blue-dot" 
                        ref={blueDotRef} 
                        style={{ opacity: 0.987 }} 
                        fill="#001eff" 
                        x="155" 
                        y="155" 
                        width="80"
                        height="80"
                        rx="50"
                        ry="50"
                    />
                </g>
            </svg>
        </div>
    );
}

export default AnimatedLogo;