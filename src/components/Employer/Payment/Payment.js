import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Payment = () => {
    const { hr } = useParams();
    const [packData, setPackData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5055/getPackInfo?hours=${hr}`)
            .then(res => res.json())
            .then(data => setPackData(data))
            .catch(err => alert(err))
    }, [hr])

    return (
        <div>
            <MainNavbar />

            <div>
                {
                    packData?.map(pack => <PaymentProcess key={pack._id} packages={pack}></PaymentProcess>)
                }
            </div>
        </div>
    );
};

export default Payment;