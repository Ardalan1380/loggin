import React from 'react';  

import styles from "./Brand.module.css"

const Brands = () => {
    return (
        <div className={styles.container}>
            <h4>
                برندها
            </h4>
            <ul className={styles.list}>
                <li>فونیکس</li>
                <li>جری</li>
                <li>جیلی</li>
                <li>ام وی ام</li>
                <li>لیفان</li>
                <li>جک</li>
            </ul>
        </div>
    );
};

export default Brands;