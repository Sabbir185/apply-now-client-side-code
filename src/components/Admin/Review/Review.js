import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { Table } from 'react-bootstrap';
import JobPostList from '../JobPostList/JobPostList';


const Review = () => {
    const [allJob, setAllJob] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5055/jobViewAdmin')
            .then(res => res.json())
            .then(data => setAllJob(data))
    }, [])


    return (
        <div>
            <MainNavbar />
            <div className="row">
                <div className="col-3"> <Sidebar /> </div>
                <div className="col mr-4">
                    <Table striped bordered hover className="mt-5">
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Title</th>
                                <th>Payment ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allJob?.map(post => <JobPostList key={post._id} post={post}></JobPostList>)
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Review;