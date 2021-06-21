import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Employer/Sidebar/Sidebar';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';

const ViewAllApplication = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    const [view, setView] = useState([])

    useEffect(()=>{
        axios.get('https://limitless-caverns-42128.herokuapp.com/allApplicationView')
        .then(res => setView(res.data))
    },[])


    return (
        <div>
            <MainNavbar />
            <div className="row">
                <div className="col-3"> <Sidebar id={userInfo} /> </div>
                <div className="col">
                    <div className="mt-5 ml-4">
                    {
                        view?.map(v => <div>
                            <ul>
                                <li>Email : {v.email} , Job Application : {v.title}</li>
                            </ul>
                        </div>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAllApplication;