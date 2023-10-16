import React, { useEffect, useState } from 'react';
//components
import WelcomD from 'components/module/WelcomD';
import WelcomeM from 'components/module/WelcomeM';


const Welcome = () => {
    
    const [width , setWidth] = useState(null)
    const [height , setHeight] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        handleResize()
        window.addEventListener("resize" , handleResize);
        return () => {
            window.removeEventListener("resize" , handleResize)
        }
    } , [])

    return (
        <>
        {
            width > 550 ? <WelcomD /> : <WelcomeM />

        }
        </>
    );
};

export default Welcome;