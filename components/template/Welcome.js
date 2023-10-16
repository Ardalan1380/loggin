import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./Welcome.module.css"

//images and svg
import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
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

    


//     const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
//   const [arabicTime, setArabicTime] = useState('');

  

//   const [minutes, setMinutes] = useState(2);
//   const [seconds, setSeconds] = useState(0);

//   const tick = () => {
//     if (minutes === 0 && seconds === 0) {
//       // Timer is done, do something here
//       return;
//     } else if (seconds === 0) {
//       setMinutes(minutes - 1);
//       setSeconds(59);
//     } else {
//       setSeconds(seconds - 1);
//     }
//   };

//   useEffect(() => {
//     const timer = setInterval(tick, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [minutes, seconds]);





    return (
        <>
        {
            width > 550 ? <WelcomD /> : <WelcomeM />

        }
        </>
    );
};

export default Welcome;