import React, { useEffect, useRef, useState } from 'react';
import styles from "./WelcomeD.module.css"
import Link from 'next/link';
import { useRouter } from 'next/router';


import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
import Image from 'next/image';
import Timer from './Timer';
import axios from 'axios';

const WelcomD = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const [error , setError] = useState("");
    const inputRefs = inputValues.map(() => useRef());
    const enterCodeRef = useRef();
    const router = useRouter();
    const phoneNumber = router.query.phoneNumber
    console.log(phoneNumber)
    //state fot min and second
    // const [minutes, setMinutes] = useState(2);
    // const [seconds, setSeconds] = useState(0);
  
    const nextInput = (index, endValue) => {
      if (index === 4) {
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
          newInputValues[index] = inputValue; 
          return newInputValues;
        });
      
        if (inputValue.trim().length === 0) {
          prevInput(index);
        } else {
          nextInput(index, inputValue);
        }
      };

      const clickHandler = async () => {
        const verificationCode = inputValues.join("");
        const formData = new FormData;
        formData.append("code", verificationCode);
        formData.append("phone" , phoneNumber)
        
        axios.post("https://shikast.com/api/auth/v1/verify", formData)
        .then( () => router.push({
          pathname: "/dashboard" ,
          query:{phoneNumber:phoneNumber}
        }))
        .catch(e => {
          console.log(e)
          setError("کد وارد شده صحیح نیست یا منقضی شده است")
        })
      }
      


console.log(inputValues)

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
               <span>
               <BsArrowLeft />
               </span>
               </Link>
               </div>
               <div className={styles.form}>
                   <div className={styles.text}>
                   <h2>
                       ورود به شیکاست
                   </h2>
                   <p>به شیکاست خوش آمدید</p>
                   </div>
                   <div className={styles.type}> 
                   <label>کد تایید برای شماره {phoneNumber} ارسال شده است</label>
                   <br />
                   <div dir='ltr' className={styles.input}>
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
                    <p className={styles.error}>{error}</p>
                   <div className={styles.last}>
                   <button onClick={clickHandler}>تایید حساب</button>
                  
                   <Timer />
                   </div>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default WelcomD;