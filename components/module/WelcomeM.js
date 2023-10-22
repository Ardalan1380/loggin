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
import axios from 'axios';

const WelcomeM = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '']);
    const [error , setError] = useState("")
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

const clickHandler = async () => {
  const verificationCode = inputValues.join("");
  const formData = new FormData;
  formData.append("code", verificationCode);
  formData.append("phone" , phoneNumber)
  // formData.append("phone")
   
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
               
                   <Timer />
                </div>
                <p className={styles.error}>
                  {error}
                </p>
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