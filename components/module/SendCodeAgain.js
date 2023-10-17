// import { useRouter } from 'next/router';
// import React from 'react';

// const SendCodeAgain = () => {
//     const router = useRouter()
//     const phoneNumber = router.query.phoneNumber

//     const clickHandler = async () => {
//         const formData = new FormData()
//         formData.append("phone" , phoneNumber);
//         const res = await fetch("https://shikast.com/api/auth/v1/resendCode" , {
//             method: "POST",
//             body :  formData,
//         });
//         const data = await res.json();
//         console.log(res)
//     }
//     return (
//         <div onClick={clickHandler}>
//             re send
//         </div>
//     );
// };

// export default SendCodeAgain;

import { toPersianNumerals } from 'helper/function';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const SendCodeAgain = () => {
    const router = useRouter();
  
    const phoneNumber = router.query.phoneNumber;

    const [resendText, setResendText] = useState('ارسال مجدد کد');
    const [timer, setTimer] = useState(120); // 2 minutes in seconds
    const [timerActive, setTimerActive] = useState(false);

    const clickHandler = async () => {
        if (!timerActive) {
            // If the timer is not active, initiate a new request
            const formData = new FormData();
            formData.append("phone", phoneNumber);

            const res = await fetch("https://shikast.com/api/auth/v1/resendCode", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            console.log(data);

            // Set the timer and disable the "Re-send" button
            setTimerActive(true);
            setResendText('ارسال مجدد کد');
        }
    };

    useEffect(() => {
        if (timerActive) {
            if (timer > 0) {
                // Decrement the timer
                const minutes = Math.floor(timer / 60);
                const seconds = timer % 60;
                setResendText(`ارسال مجدد کد تا  ${toPersianNumerals(minutes)}:${toPersianNumerals(seconds.toString().padStart(2, '0'))}`);
                const timerId = setTimeout(() => setTimer(timer - 1), 1000);
                return () => clearTimeout(timerId);
            } else {
                // Timer expired, reset the state
                setTimerActive(false);
                setResendText('ارسال مجدد کد');
            }
        }
    }, [timer, timerActive]);

    return (
        <div onClick={clickHandler}>
            {resendText}
        </div>
    );
};

export default SendCodeAgain;