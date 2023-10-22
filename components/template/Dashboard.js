import { useRouter } from 'next/router';
import React from 'react';

const Dashboard = () => {
    const router = useRouter();
    const phoneNumber = router.query.phoneNumber
    console.log(phoneNumber)
    return (
        <div style={{textAlign: "center"}}>
            <h1>Dashboard</h1>
            <p>کاربر{phoneNumber}</p>
        </div>
    );
};

export default Dashboard;