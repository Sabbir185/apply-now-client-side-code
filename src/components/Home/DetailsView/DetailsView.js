import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import DetailsViewCard from '../DetailsViewCard/DetailsViewCard';

const DetailsView = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5055/viewDetails/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data.reverse()))
    }, [id])

    return (
        <div>
            <MainNavbar />

            <div className='container'>
                {
                    details?.map(detail => <DetailsViewCard key={detail._id} detail={detail}></DetailsViewCard>)
                }
            </div>

        </div>
    );
};

export default DetailsView;