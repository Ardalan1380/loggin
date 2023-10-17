import React, { useEffect, useState } from 'react';
import SendCodeAgain from './SendCodeAgain';
import { toPersianNumerals } from 'helper/function';

const Timer = () => {
    
      const [duration, setDuration] = useState(120);
        const mins = Math.floor((duration % 3600) / 60);
        const secs = duration % 60;
        useEffect(() => {
            return () => clearInterval(timer);
        }, []);

        const timer = setInterval(() => {
            clearInterval(timer);
            setDuration((prev) => prev - 1);
        }, 1000);

          const renderTimer = () => {
            if (duration >= 1) {
            return (
                <>
                <p>
                           ارسال مجدد کد تا : <span>
                            {toPersianNumerals(secs).padStart(2, '۰')} : {toPersianNumerals(mins).padStart(2, '۰')} 
                            </span>
                           </p>

                {/* </p> */}
                </>
                
            );
            } else {
            clearInterval(timer);
            return (
                <SendCodeAgain
                />
            );
            }
        };
    return (
        renderTimer()
    );
};

export default Timer;