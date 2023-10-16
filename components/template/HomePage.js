import React, { useRef, useState } from 'react';
import styles from "./HomePage.module.css"
import Link from 'next/link';
import DeviceSize from 'utils/DeviceSize';

const HomePage = () => {

    // const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);
    // const inputRefs = inputValues.map(() => useRef());
    // const enterCodeRef = useRef();
  
    // const nextInput = (index, endValue) => {
    //   if (index === 5) {
    //     enterCodeRef.current.click();
    //     setIsLoading(1);
    //   } else {
    //     inputRefs[index + 1]?.current.focus();
    //   }
    //   setInputValues((prevValues) => {
    //     const newInputValues = [...prevValues];
    //     newInputValues[index] = endValue;
    //     return newInputValues;
    //   });
    // };
  
    // const prevInput = (index) => {
    //   if (index > 0) {
    //     inputRefs[index - 1]?.current.focus();
    //   }
    // };
  
    // const onChangeHandler = (e, index) => {
    //   const inputValue = e.target.value;
    //   if (inputValue.trim().length === 0) {
    //     prevInput(index);
    //   } else {
    //     nextInput(index, inputValue);
    //   }
    // };
  
    // const [isLoading, setIsLoading] = useState(0);
  
    return (
        <div className={styles.container}>
        <h1>
          <Link href="/loggin">ورود و عضویت</Link>
        </h1>
        
      </div>
    );
};

export default HomePage;