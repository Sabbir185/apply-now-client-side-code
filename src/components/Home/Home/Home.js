import React from 'react';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar'
import JobPost from '../JobPost/JobPost';

const Home = () => {
    return (
        <section>
            <MainNavbar />
            <JobPost/>
        </section>
    );
};

export default Home;