import React from 'react';
import Image from 'next/image';

import styles from "./Contact.module.css";

import vector from "../img/vector.svg";
import gmail from "../img/gmail.svg"
import location from "../img/location.svg"

const Contact = () => {
    return (
        <div className={styles.container}>
            <h2>راه های ارتباطی</h2>
        {/* <div className={styles.items}> */}
            <div> 
                <Image src={vector} height={30} width={30} />
                <p>۰۹۳۹۸۶۳۵۷۵۶ – ۰۹۱۲۴۳۷۰۷۲۳</p>
            </div>
            <div> 
                <Image src={gmail} height={30} width={30} />
                <p>info@systimecoach.com</p>
            </div>
            <div> 
                <Image src={location} height={30} width={30} />
                <p>جردن ، خیابان دستگردی ، ساختمان ۳۵۴</p>
        {/* </div> */}
            </div>
        </div>
    );
};

export default Contact;