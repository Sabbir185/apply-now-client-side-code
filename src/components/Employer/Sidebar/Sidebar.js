import React, { useEffect } from 'react';
import { useState } from 'react';
import image from '../../../images/image.png'
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = ({ id }) => {
    const [employer, setEmployer] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5055/getPayInfo?id=${id}`)
        .then(res => res.json())
        .then(data => setEmployer(data))
        .catch(err => alert(err))
    },[id])


    return (
        <div>
            <div className='image mt-5'>
                <img src={image} alt="" className='img-fluid'/>
            </div>
            <div  className='text-center border-bottom'>
                {
                    employer?.map( emp => <div>
                        <h6>Package : <span className="text-success">{emp.plan}</span></h6>
                        <p>{emp.email}</p>
                    </div>)
                }
            </div>
            <div className='text-center mt-5'>
                <Link className='text-decoration-none' to='/addJobPost'><h6 className='job-post'>Add Job Post</h6></Link>
            </div>

            <div className='text-center mt-3'>
                <Link className='text-decoration-none' to='/view-application'><h6 className='job-post'>View All Application</h6></Link>
            </div>
        </div>
    );
};

export default Sidebar;