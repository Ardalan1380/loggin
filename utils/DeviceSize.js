// import { useEffect, useState } from "react";

// export function width () {
//     const [width , setWidth] = useState(null)

//     useEffect(() => {
//         const handleResize = () => {
//                         setWidth(window.innerWidth);
//                         setHeight(window.innerHeight);
//                     }
//                     handleResize()
//                     window.addEventListener("resize" , handleResize);
//                     return () => {
//                         window.removeEventListener("resize" , handleResize)
//                     }
//     },[]) 
//     return width
// }

import LogginFormD from 'components/module/LogginFormD';
import LogginFormM from 'components/module/LogginFormM';
import Footer from 'components/template/Footer';
import React, { useEffect, useState } from 'react';

const DeviceSize = () => {
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
        <div>
           {
            width < 550 ? <LogginFormM /> : <LogginFormD />
           }
           {/* <h1>width is : {width}</h1> */}
        </div>
    );
};

export default DeviceSize;