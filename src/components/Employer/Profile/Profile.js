import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import SetProfileDetails from '../SetProfileDetails/SetProfileDetails';

const Profile = () => {
    const {payId} = useParams();
    const [payStatus, setPayStatus] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5055/getPayInfo?id=${payId}`)
        .then(res => res.json())
        .then(data => setPayStatus(data))
        .catch(err => alert(err))
    },[payId])
    

    return (
        <div>
            <MainNavbar />

            <div>
                {
                    payStatus?.map(pay => <SetProfileDetails key={pay._id} payInfo={pay}></SetProfileDetails>)
                }
            </div>
        </div>
    );
};

export default Profile;