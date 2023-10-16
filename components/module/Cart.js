import React from 'react';
import styles from "./Cart.module.css"

//images 
import difftence from "../img/difftence.png";
import tick from "../img/tick.png";
import pleasure from "../img/pleasure.png"
import dioment from "../img/dioment.png";
import Image from 'next/image';


const Cart = () => {
    return (
        <div className={styles.container}>
            
            <div>
            <Image src={difftence} width={100} height={100} />
            <p>تنوع بالای <span>محصولات</span></p>
            </div>

            <div>
            <Image src={pleasure} width={100} height={100} />
            <p>بیش از 1K<span>مشتزی راضی</span></p>
            </div>

            <div>
            <Image src={tick} width={100} height={100} />
            <p>محصولات با کیفیت <span>و اورجینال</span></p>
            </div>

            <div>
            <Image src={dioment} width={100} height={100} />
            <p>بالای 10 سال تجربه<span>فروش محصولات</span></p>
            </div>
            
        </div>
    );
};

export default Cart;