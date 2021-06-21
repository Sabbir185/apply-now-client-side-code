import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import JobPostCard from '../JobPostCard/JobPostCard';

const JobPost = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/jobViewAdmin')
            .then(res => res.json())
            .then(data => setPost(data.reverse()))
    }, [])


    return (
        <section className='container mt-5'>
            <h4 className='mb-4'>Latest <strong className='text-success'>Job</strong> Post :</h4>
            <div className='d-flex'>
                {
                    post?.map(job => <JobPostCard key={job._id} job={job}></JobPostCard>)
                }
            </div>
        </section>
    );
};

export default JobPost;

// {
//     post?.map(job => <JobPostCard key={job._id} job={job}></JobPostCard>)
// }