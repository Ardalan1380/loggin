import React, { useEffect, useRef, useState } from 'react';
import styles from "./WelcomeD.module.css"


import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
import Image from 'next/image';
import Link from 'next/link';

const WelcomD = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const inputRefs = inputValues.map(() => useRef());
    const enterCodeRef = useRef();
  
    const nextInput = (index, endValue) => {
      if (index === 5) {
        enterCodeRef.current.click();
        setIsLoading(1);
      } else {
        inputRefs[index + 1]?.current.focus();
      }
      setInputValues((prevValues) => {
        const newInputValues = [...prevValues];
        newInputValues[index] = endValue;
        return newInputValues;
      });
    };
  
    const prevInput = (index) => {
      if (index > 0) {
        inputRefs[index - 1]?.current.focus();
      }
    };
  
    const onChangeHandler = (e, index) => {
        const inputValue = e.target.value;
        setInputValues((prevValues) => {
          const newInputValues = [...prevValues];
          newInputValues[index] = inputValue; // Always update the value
          return newInputValues;
        });
      
        if (inputValue.trim().length === 0) {
          prevInput(index);
        } else {
          nextInput(index, inputValue);
        }
      };
  
    const [isLoading, setIsLoading] = useState(0);


    
const [minutes, setMinutes] = useState(2);
const [seconds, setSeconds] = useState(0);

// Function to convert numbers to Persian (Farsi) numerals
const toPersianNumerals = (number) => {
  const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.toString().replace(/\d/g, (match) => persianNumerals[match]);
};

const tick = () => {
  if (minutes === 0 && seconds === 0) {
    // Timer is done, reset all numbers to 0
    setMinutes(0);
    setSeconds(0);
  } else if (seconds === 0) {
    setMinutes(minutes - 1);
    setSeconds(59);
  } else {
    setSeconds(seconds - 1);
  }
};

useEffect(() => {
  const timer = setInterval(tick, 1000);
    
  return () => {
    clearInterval(timer);
  };
}, [minutes, seconds]);


    return (
        <div className={styles.container}>
        <div className={styles.aside}>
           <h4 className={styles.brand}>
               <span className={styles.size}>Shik</span>ast
               </h4>
           <Image src={circle} width={400} height={400} alt='group' />
           </div>
           <div className={styles.main}>
               <div className={styles.home  }>
               <Link href="/">
                   بازگشت به خانه&nbsp;
               </Link>
               <span>
               <BsArrowLeft />
               </span>
               </div>
               <div className={styles.form}>
                   <div className={styles.text}>
                   <h2>
                       ورود به شیکاست
                   </h2>
                   <p>به شیکاست خوش آمدید</p>
                   </div>
                   <div className={styles.type}> 
                   <label>کد تایید برای شماره ۰۹۱۰۹۳۰۸۷۲۰ ارسال شده است</label>
                   <br />
                  {inputValues.map((input, index) => (
                      <input
                      value={input}
                      ref={inputRefs[index]}
                      key={index}
                      maxLength={1}
                      onChange={(e) => onChangeHandler(e, index)}
                      type="number"
                      inputMode="numeric"
                      />
                      ))}
                   <div className={styles.last}>
                   <Link href="/welcome">
                   <button>تایید حساب</button>
                   </Link>
                   </div>

                   <p>
                   ارسال مجدد کد تا : <span>
                    {toPersianNumerals(seconds).padStart(2, '۰')} : {toPersianNumerals(minutes).padStart(2, '۰')} 
                    </span>
                   </p>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default WelcomD;