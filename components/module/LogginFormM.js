import React, { useState } from 'react';
import styles from "./LogginFormM.module.css"


//images and svg
import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
import Link from 'next/link';
import Image from 'next/image';
import Footer from 'components/template/Footer';
import { useRouter } from 'next/router';
import axios from 'axios';


const LogginFormM = () => {
    const router = useRouter();

    const [number , setNumber] = useState('');
    const [error , setError] = useState("");

    const clickHandler = async () => {
        const formData = new FormData();
        formData.append("register_phone", number);
         axios.post("https://shikast.com/api/auth/v1/loginRegister", formData)
          .then(res => {
            if(res.status === 200) {
                router.push({
                    pathname: '/welcome',
                    query: {phoneNumber : res.data.phone}
                })
            }
          })
            .catch(e => {
                console.log(e);
                setError("فرمت وارد شده صحیح نمی‌باشد")
            });
        
      }

    const changeHandler = (e) => {
        setNumber(e.target.value);
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
                    <label>برای ورود و عضویت در سایت شماره موبایل خود را وارد نمایید</label>
                    <input 
                    type='number' 
                    placeholder='شماره موبایل' 
                    inputMode="numeric" 
                    value={number}
                    onChange={changeHandler}
                    />

                    {
                       <p className={styles.error}>
                            {
                                error
                            }
                        </p>
                    }
                    
                    {/* <Link href="/welcome"> */}
                   <button onClick={clickHandler}>ورودوعضویت</button>
                    {/* </Link> */}
                </div>
            </div>
            <div className={styles.photo}>
                <Image src={circle} height={350} width={350} alt='circle' />
            </div>
            <Footer />
       </div>
    );
};

export default LogginFormM;