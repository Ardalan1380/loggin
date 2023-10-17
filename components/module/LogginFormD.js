import React, { useState } from 'react';
import styles from "./LogginFormD.module.css"
import Link from 'next/link';
import Image from 'next/image';


//images and svg
import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
import axios from 'axios';
import { useRouter } from 'next/router';


const LogginFormD = () => {
    const router = useRouter()

    const [number , setNumber] = useState('');

    const clickHandler = async () => {
        const formData = new FormData();
        formData.append("register_phone", number);
        //  axios.post("https://shikast.com/api/auth/v1/loginRegister", formData)
        //   .then(res => console.log(setNumber(res)))
        //     .catch(e => console.log(e))
        const res = await fetch("https://shikast.com/api/auth/v1/loginRegister" , {
            method:"POST",
            body:formData,    
        })
        const data = await res.json();
        // console.log(data.phone)
        if (res.status === 200) {
            router.push({
              pathname: '/welcome',
              query: { phoneNumber: data.phone }, // Pass the data as a query parameter
            });
          }
        ;
        
      }
    const changeHandler = (e) => {
        setNumber(e.target.value)
    }

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
                   <label>برای ورود و عضویت در سایت شماره موبایل خود را وارد کنید</label>
                   <input 
                   type='number'
                   placeholder='شماره موبایل' 
                   inputMode="numeric" 
                   value={number}
                   onChange={changeHandler}
                   />
                   {/* <Link href="/welcome"> */}
                   <button onClick={clickHandler}>ورود و عضویت</button>
                   {/* </Link> */}
                   </div>
               </div>
           </div>
       </div>
    );
};

export default LogginFormD;