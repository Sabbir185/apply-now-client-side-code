import React from 'react';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div>
            <MainNavbar />

            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
    );
};

export default Admin;