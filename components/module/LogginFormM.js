import React from 'react';

import styles from "./LogginFormM.module.css"


//images and svg
import {BsArrowLeft} from "react-icons/bs"
import circle from "../img/Group.png"
import Link from 'next/link';
import Image from 'next/image';
import Footer from 'components/template/Footer';


const LogginFormM = () => {
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
                    <input type='number' placeholder='شماره موبایل' inputMode="numeric" />
                   <button>ورودوعضویت</button>
                </div>
            </div>
            <div className={styles.photo}>
                <Image src={circle} height={350} width={350} />
            </div>
            <Footer />
       </div>
    );
};

export default LogginFormM;