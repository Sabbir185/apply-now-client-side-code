import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const JobPostCard = (props) => {
    let { adminPermission, company, details, id, skills, title, _id } = props.job;

    const history = useHistory();
    
    const handleView = (id) => {
        history.push(`/detailsView/${id}`)
    }


    return (
        <>
            {
                adminPermission &&
                <Card style={{ width: '18rem', marginRight:'20px' }}>
                    <Card.Body>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Company : {company}</Card.Subtitle>
                            <Card.Text>
                                <em>Skill : {skills}</em>
                            </Card.Text>
                            <Link className='text-decoration-none'><button className='btn btn-outline-success d-block mx-auto mt-4' onClick={()=>handleView(_id)}>view details</button></Link>
                        </Card.Body>
                    </Card.Body>
                </Card>

            }
        </>
    );
};

export default JobPostCard;