import React from 'react';

const DetailsViewCard = (props) => {
    const { company, adminPermission, details, id, skills, title, _id } = props.detail;


    return (
        <div>

            <div className='d-flex justify-content-between mt-4 border-bottom'>
                <h4>Job details</h4>
                <h6><em>Varified by <span className='text-success'>admin</span></em></h6>
            </div>


            <div className='mt-4'>
                <h5 className='mt-4'>Title : {title}</h5>
                <h6 className='mt-4'>Company : {company}</h6>
                <h6 className='mt-4'>Description : </h6>
                <div className='w-50 text-justify'>
                    <p>{details}</p>
                </div>
                <h6 className='mt-4'>Skill : <span className='text-primary'>{skills}</span></h6>
                <button className='btn btn-outline-success px-3 mt-4'>Apply Now</button>
            </div>


        </div>
    );
};

export default DetailsViewCard;