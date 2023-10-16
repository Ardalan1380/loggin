import React from 'react';
import Image from 'next/image';
import styles from "./Contact.module.css";

// svg
import vector from "../img/vector.svg";
import gmail from "../img/gmail.svg"
import location from "../img/location.svg"

const Contact = () => {
    return (
        <div className={styles.container}>
            <h2>راه های ارتباطی</h2>
            <div> 
                <Image src={vector} height={30} width={30} alt='vector'/>
                <p>۰۹۳۹۸۶۳۵۷۵۶ – ۰۹۱۲۴۳۷۰۷۲۳</p>
            </div>
            <div> 
                <Image src={gmail} height={30} width={30} alt='gmail'/>
                <p>info@systimecoach.com</p>
            </div>
            <div> 
                <Image src={location} height={30} width={30} alt='location' />
                <p>جردن ، خیابان دستگردی ، ساختمان ۳۵۴</p>
            </div>
        </div>
    );
};

export default Contact;