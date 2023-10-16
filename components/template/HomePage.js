import React, { useRef, useState } from 'react';
import styles from "./HomePage.module.css"
import Link from 'next/link';
import DeviceSize from 'utils/DeviceSize';

const HomePage = () => {
    return (
        <div className={styles.container}>
        <h1>
          <Link href="/loggin">ورود و عضویت</Link>
        </h1>
        
      </div>
    );
};

export default HomePage;