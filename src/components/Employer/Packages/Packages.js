import React from 'react';
import './Packages.css'

const Packages = () => {

    return (
        <section>
            <div className="row">
                <div className="col">
                    <h3 className='text-center mt-5'><span className='pack-style'>Basic</span></h3>
                    <div className="text-center mt-5 pack-container">
                        <h6>Unlimited Support</h6>
                        <h6>Email Notifications</h6>
                        <h6>Post a job <span className="text-success">10 hours</span> per month</h6>
                        <button className='btn btn-outline-success mt-4'>Select</button>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text-center mt-5'><span className='pack-style'>Standard</span></h3>
                    <div className="text-center mt-5 pack-container">
                        <h6>Unlimited Support</h6>
                        <h6>Email Notifications</h6>
                        <h6>Post a job <span className="text-success">20 hours</span> per month</h6>
                        <button className='btn btn-outline-success mt-4'>Select</button>
                    </div>
                </div>
                <div className="col">
                    <h3 className='text-center mt-5'><span className='pack-style'>Premium</span></h3>
                    <div className="text-center mt-5 pack-container">
                        <h6>Unlimited Support</h6>
                        <h6>Email Notifications</h6>
                        <h6>Post a job <span className="text-success">30 hours</span> per month</h6>
                        <button className='btn btn-outline-success mt-4'>Select</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;