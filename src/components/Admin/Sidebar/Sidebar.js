import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className='text-center mt-5 pt-5 admin-sidebar'>
                <h2><span>Admin</span></h2>
                <Link className="text-decoration-none text-dark" to="/plan"><h5 className='mt-4 mb-3'>Add Plan</h5></Link>
                <Link className="text-decoration-none text-dark" to="/review"><h5>Review</h5></Link>
            </div>
        </div>
    );
};

export default Sidebar;