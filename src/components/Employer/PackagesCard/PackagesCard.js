import React from 'react';
import { useHistory } from 'react-router-dom';


const PackagesCard = (props) => {
    const { support, notification, hours, plan, cost } = props.package;
    const history = useHistory();

    const handlePurchase = (hr) => {
        history.push(`/payment/${hr}`);
    }

    return (
        <div className="col">
            <h3 className='text-center mt-5'><span className='pack-style'>{plan}</span></h3>
            <div className="text-center mt-5 pack-container post-container" style={{border:'1px solid #82E0AA'}}>
                <h6>{support}</h6>
                <h6>{notification}</h6>
                <h6>Post a job <span className="text-success">{hours} hours</span> per month</h6>
                <h6><strong><em>Cost : ${cost}</em></strong></h6>
                <button onClick={()=>handlePurchase(hours)} className='btn btn-outline-success mt-4'>Select Now</button>
            </div>
        </div>
    );
};

export default PackagesCard;