import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar'

const EmployerProfile = () => {
    const {id} = useParams();
    const [userInfo, setUserInfo] = useContext(UserContext)
   
    useEffect(()=>{
        setUserInfo(id)
    },[])

    console.log(userInfo)

    return (
        <div>
            <MainNavbar/>

            <div className="row">
                <div className="col-3">
                    <Sidebar id={id}/>
                </div>
                <div className="col">

                </div>
            </div>

        </div>
    );
};

export default EmployerProfile;