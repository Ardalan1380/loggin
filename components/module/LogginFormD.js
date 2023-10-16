import React from 'react';
import styles from "./LogginFormD.module.css"
import Link from 'next/link';
import Image from 'next/image';


//images and svg
import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"


const LogginFormD = () => {
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
                   <input type='number' placeholder='شماره موبایل' inputMode="numeric" />
                   <Link href="/welcome">
                   <button>ورود و عضویت</button>
                   </Link>
                   </div>
               </div>
           </div>
       </div>
    );
};

export default LogginFormD;