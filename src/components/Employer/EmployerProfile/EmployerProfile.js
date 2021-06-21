import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar'

const EmployerProfile = () => {
    const { id } = useParams();
    const [userInfo, setUserInfo] = useContext(UserContext)

    useEffect(() => {
        setUserInfo(id)
    }, [])

    console.log(userInfo)

    return (
        <div>
            <MainNavbar />

            <div className="row">
                <div className="col-3">
                    <Sidebar id={id} />
                </div>
                <div className="col">
                    <p className='mt-5 pt-5 text-center'><em>Here you can view all application or <span className='text-success'>add</span> new job post in 'Add Job Post' section</em></p>
                </div>
            </div>

        </div>
    );
};

export default EmployerProfile;