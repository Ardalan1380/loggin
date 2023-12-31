import React from 'react';
import styles from "./MainFooter.module.css"

// components   
import Brands from './Brands';
import UsageLnk from './UsageLink';
import Contact from './Contact';


const MainFooter = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.background}>
                <div className={styles.red}>
                    <h6><span>Shi</span>kaset</h6>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                </div>
            <div className={styles.middle}>
                <Brands />
                <UsageLnk />
            </div>
                <div className={styles.line}></div>
            <Contact />

            <p className={styles.last}>
                تمامی حقوق این سایت محفوظ است
            </p>
            </div>

        </div>
    );
};

export default MainFooter;