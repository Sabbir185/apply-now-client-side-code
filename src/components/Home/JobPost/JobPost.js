import axios from 'axios';
import React, { useEffect, useState } from 'react';
import JobPostCard from '../JobPostCard/JobPostCard';
import './JobPost.css'

const JobPost = () => {
    const [post, setPost] = useState([]);
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        fetch('https://limitless-caverns-42128.herokuapp.com/jobViewAdmin')
            .then(res => res.json())
            .then(data => setPost(data.reverse()))
    }, [])

    const handleFilter = (e) => {
        const skill = e.target.value;
        axios.get(`https://limitless-caverns-42128.herokuapp.com/filterJob?skill=${skill}`)
        .then(res => setFilterData(res.data))
    }

    return (
        <section className='container mt-5'>
            <div className='d-flex justify-content-between'>
                <h4 className='mb-4'>Latest <strong className='text-success'>Job</strong> Post : {post.length}</h4>
                <div>
                    <select name="status" id="" className='form-control' onChange={handleFilter}>
                        <option value="choose" className="text-secondary font-weight-bold">Choose Job</option>
                        <option value="MongoDB" className="text-success font-weight-bold">MongoDB</option>
                        <option value="NodeJs" className="text-success font-weight-bold">NodeJs</option>
                        <option value="ReactJs" className="text-success font-weight-bold">ReactJs</option>
                    </select>
                </div>
            </div>
            <div className='home'>
                {
                    filterData.length > 0 ? 
                    filterData?.map(job => <JobPostCard key={job._id} job={job}></JobPostCard>)
                    :
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