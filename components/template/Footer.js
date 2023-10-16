import React from 'react';

import styles from "./Footer.module.css";
import Cart from 'components/module/Cart';
import MainFooter from 'components/module/MainFooter';

const Footer = () => {
    return (
        <div className={styles.container}>
           <div className={styles.line}></div>
           <Cart />
           <MainFooter />
        </div>
    );
};

export default Footer;