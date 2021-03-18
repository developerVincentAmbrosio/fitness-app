import { useState, useEffect } from 'react';

export const useDetectOutsideClick = (el, intitialState) => {
    const [isActive, setIsActive] = useState(intitialState);

        useEffect(() => {
            const pageClickEvent = event => {
                if (el.current !== null && !el.current.contains(event.target)) {
                    setIsActive(!isActive)
                }
            }
            if(isActive) {
                window.addEventListener('click', pageClickEvent)
            }
            return () => {
                window.removeEventListener('click', pageClickEvent)
            }
    
        }, [isActive, el]);

        return [isActive, setIsActive];
}