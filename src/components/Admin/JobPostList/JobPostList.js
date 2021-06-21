import React from 'react';
import { useHistory } from 'react-router-dom';

const JobPostList = (props) => {
    const {company, details, id, skills, title, _id} = props.post;
    const history = useHistory();

    const handlePost = (_id) => {
        const admin = {
            adminPermission: true
        }
        fetch(`http://localhost:5055/postPermission/${_id}`,{
            method:'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(admin)
        })
        .then(res=> res.json())
        .then(product=>{
            if(product){
                alert('Permission accepted!');
                history.push(`/`);
            }
        })
    }

    return (
        <tr>
            <td>{company}</td>
            <td>{title}</td>
            <td>{id}</td>
            <td className='btn btn-success font-weight-bolder' onClick={()=>handlePost(_id)}>Accept</td>
        </tr>
    );
};

export default JobPostList;