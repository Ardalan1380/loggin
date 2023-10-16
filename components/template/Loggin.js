import React, { useEffect, useRef, useState } from 'react';
import styles from "./Loggin.module.css"
import Link from 'next/link';
import Image from 'next/image';


//images and svg
import DeviceSize  from 'utils/DeviceSize';
import LogginFormD from 'components/module/LogginFormD';

const Loggin = () => {
    return (
        <>
       {/* <LogginFormD /> */}
            <DeviceSize />
        </>
    );
};

export default Loggin;