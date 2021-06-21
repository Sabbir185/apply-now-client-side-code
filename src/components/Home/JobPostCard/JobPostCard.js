import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './JobPostCard.css'

const JobPostCard = (props) => {
    let { adminPermission, company, details, id, skills, title, _id } = props.job;

    const history = useHistory();

    const handleView = (id) => {
        history.push(`/detailsView/${id}`)
    }


    return (
        <div>
            {
                adminPermission &&
                <Card style={{ width: '18rem' }} className='post-container'>
                    <Card.Body>
                        <Card.Body>
                            <h6>{title}</h6>
                            <Card.Subtitle className="mb-2 mt-3 text-muted">Company : {company}</Card.Subtitle>
                            <Card.Text>
                               <h6 className='mt-3'> <em>Skill : {skills}</em></h6>
                            </Card.Text>
                            <Link className='text-decoration-none'><button className='btn btn-outline-success d-block mx-auto mt-4' onClick={() => handleView(_id)}>view details</button></Link>
                        </Card.Body>
                    </Card.Body>
                </Card>

            }
        </div>
    );
};

export default JobPostCard;