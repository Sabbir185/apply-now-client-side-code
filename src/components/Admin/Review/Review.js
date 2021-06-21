import React from 'react';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div>
            <MainNavbar />
            <div className="row">
                <div className="col-3"> <Sidebar /> </div>
                <div className="col">
                    <h2>Review</h2>
                </div>
            </div>
        </div>
    );
};

export default Review;