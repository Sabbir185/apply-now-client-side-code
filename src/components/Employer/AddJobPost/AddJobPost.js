import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar';

const AddJobPost = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);

    console.log(userInfo)

    return (
        <div>
            <MainNavbar />

            <div className="row">
                <div className="col-3"> <Sidebar id={userInfo}/> </div>
                <div className="col">
                    
                </div>
            </div>
         
        </div>
    );
};

export default AddJobPost;