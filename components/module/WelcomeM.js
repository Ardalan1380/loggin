import React, { useEffect, useRef, useState } from 'react';
import styles from "./WelcomeM.module.css"
import Footer from 'components/template/Footer';

import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
import Link from 'next/link';
import Image from 'next/image';
import { toPersianNumerals } from 'helper/function';
import { useRouter } from 'next/router';
import Timer from './Timer';

const WelcomeM = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const inputRefs = inputValues.map(() => useRef());
    const enterCodeRef = useRef();
    const router = useRouter();
    const phoneNumber = router.query.phoneNumber
    console.log(phoneNumber)
  
    // functions for input code msg
    const nextInput = (index, endValue) => {
      if (index === 5) {
        enterCodeRef.current.click();
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


    // state font timer
const [minutes, setMinutes] = useState(2);
const [seconds, setSeconds] = useState(0);

// Function to convert numbers to Persian (Farsi) numerals


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



const clickHandler = async () => {
  const verificationCode = inputValues.join("");
  const formData = new FormData;
  formData.append("code", verificationCode);
  formData.append("phone" , phoneNumber)
  // formData.append("phone")
  const res = await fetch("https://shikast.com/api/auth/v1/verify", {
    method: "POST",
    body: formData
  })
  const data = await res.json()
  console.log(data);
}

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.both}>
                    <p><span>Shi</span>kast</p>
                    <Link href="/"> 
                          بازگشت به خانه &nbsp; 
                              <BsArrowLeft />
                        <span>
                        </span>
                        </Link>
                </div>
                <div className={styles.text}>
                <h2>ورود به شیکاست</h2>
                <p>به شیکاست خوش آمدید</p>
                </div>
                <div className={styles.form}>
                <label>کد تایید برای شماره ۰۹۱۰۹۳۰۸۷۲۰ ارسال شده است</label> <br />
                <div dir='ltr'>
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
                </div>
                      <div className={styles.last}>
                   <button onClick={clickHandler}>تایید حساب</button>
                {/* <p>
                   ارسال مجدد کد تا : <span>
                    {toPersianNumerals(seconds).padStart(2, '۰')} : {toPersianNumerals(minutes).padStart(2, '۰')} 
                    </span>
                   </p> */}
                   <Timer />
                </div>
                      </div>
            </div>
            <div className={styles.photo}>
                <Image src={circle} height={350} width={350} alt='circle' />
            </div>
            <Footer />
       </div>
    );
};

export default WelcomeM;