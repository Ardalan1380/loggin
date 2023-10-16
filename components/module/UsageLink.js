import React from 'react';

import styles from "./Usage.module.css"

const UsageLnk = () => {
    return (
        <div className={styles.container}>
             <h4>
             لینک های کاربردی
             </h4>
             <ul className={styles.list}>
                <li>وبلاگ</li>
                <li>خدمات</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>سوالات متداول</li>
                <li>قوانین و مقررات</li>
            </ul>
        </div>
    );
};

export default UsageLnk;