import axios from 'axios';
import { toPersianNumerals } from 'helper/function';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const SendCodeAgain = () => {
    const router = useRouter();
    const phoneNumber = router.query.phoneNumber;

    const [resendText, setResendText] = useState('ارسال مجدد کد');
    const [timer, setTimer] = useState(120);
    const [timerActive, setTimerActive] = useState(false);

    const clickHandler = async () => {
        if (!timerActive) {
            const formData = new FormData();
            formData.append("phone", phoneNumber);
            
            axios.post("https://shikast.com/api/auth/v1/resendCode" , formData)
            
            setTimerActive(true);
            setResendText('ارسال مجدد کد تا'); 
        }
    };

    useEffect(() => {
        if (timerActive) {
            if (timer > 0) {
                
                const minutes = Math.floor(timer / 60);
                const seconds = timer % 60;
                setResendText(
                    `لطفا منتظر بمانید ${toPersianNumerals(minutes)}:${toPersianNumerals(seconds.toString().padStart(2, '0'))}`
                );
                const timerId = setTimeout(() => setTimer(timer - 1), 1000);
                return () => clearTimeout(timerId);
            } else {
                setTimerActive(false);
                setResendText('ارسال مجدد کد');
            }
        }
    }, [timer, timerActive]);

    return (
        <div onClick={clickHandler} style={{ cursor: timerActive ? 'not-allowed' : 'pointer' }}>
            {resendText}
        </div>
    );
};

export default SendCodeAgain;



// axios.post("https://shikast.com/api/auth/v1/resendCode" , formData)