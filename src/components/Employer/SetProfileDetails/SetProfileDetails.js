import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const SetProfileDetails = (props) => {
    const {cost, hours, id, notification, plan, support, _id} = props.payInfo;
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const employerProfile = {
            email: data.email,
            password: data.password,
        }
        fetch(`https://limitless-caverns-42128.herokuapp.com/updateSubmit?id=${id}`,{
            method:'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(employerProfile)
        })
        .then(res=> res.json())
        .then(product=>{
            if(product){
                alert('Updated!');
                history.push(`/profile/${id}`);
            }
        })
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5 pt-5">
                <h4 className='mb-4'>Update Your Profile : </h4>
                <small className="text-secondary">Email : </small>
                <input type='email'  {...register("email", { required: true })} className="form-control mb-2" />
                {errors.email && <span className="text-danger">This field is required</span>}

                <small className="text-secondary">Password : </small>
                <input type='password'  {...register("password", { required: true })} className="form-control mb-2" />
                {errors.password && <span className="text-danger">This field is required</span>}

                <input type="submit" value="Update Profile" className="btn btn-success mt-4 px-4" />
            </form>
        </div>
    );
};

export default SetProfileDetails;