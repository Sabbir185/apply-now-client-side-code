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
                <div className="col text-center">
                    <p className='mt-5 pt-5'><em>Here you can add new package or <span className='text-success'>accept</span> post in 'Review Post' section</em></p>
                </div>
            </div>
        </div>
    );
};

export default Admin;