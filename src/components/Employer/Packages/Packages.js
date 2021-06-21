import React, { useEffect, useState } from 'react';
import './Packages.css'
import PackagesCard from '../PackagesCard/PackagesCard';
import axios from 'axios';

const Packages = () => {
    const [packData, setPackData] = useState([]);

    useEffect(()=>{
        axios.get('https://limitless-caverns-42128.herokuapp.com/getPackages')
        .then(res => {
            setPackData(res.data)
        })
       
    },[])
    

    return (
        <section className='container'>
            <div className="row">
                {
                    packData?.map(pack => <PackagesCard package={pack} key={pack._id}></PackagesCard>)
                }
            </div>
        </section>
    );
};

export default Packages;