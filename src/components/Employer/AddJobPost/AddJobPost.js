import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar';

const AddJobPost = () => {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    
    const onSubmit = data => {
        const {company, details, skills, title} = data;
        const post = {
            company: company,
            details: details,
            skills: skills,
            title: title,
            id: userInfo,
        }

        axios.post('https://limitless-caverns-42128.herokuapp.com/jobPost',post)
        .then(res => {
            if(res){
                alert('Posted! Please wait for admin review');
                history.push('/')
            }
        })
    };


    return (
        <div>
            <MainNavbar />

            <div className="row">
                <div className="col-3"> <Sidebar id={userInfo} /> </div>
                <div className="col">
                    <form onSubmit={handleSubmit(onSubmit)} className='mt-5 ml-5'>

                        <h4 className='my-4'>New Job Post :</h4>
                        
                        <input type='text' {...register("title", { required: true })} className="form-control w-50 mb-3" placeholder='Job title'/>
                        {/* errors will return when field validation fails  */}
                        {errors.title && <span className="text-danger">This field is required</span>}
                        
                        <input type='text' {...register("company", { required: true })} className="form-control w-50 mb-3" placeholder='Company name'/>
                        {/* errors will return when field validation fails  */}
                        {errors.company && <span className="text-danger">This field is required</span>}
                        
                        <input type='text' {...register("details", { required: true })} className="form-control w-50 pb-5 pt-3" placeholder='Job description'/>
                        {/* errors will return when field validation fails  */}
                        {errors.details && <span className="text-danger">This field is required</span>}

                        <input type='text' {...register("skills", { required: true })} className="form-control w-50 my-3" placeholder='skills'/>
                        {/* errors will return when field validation fails  */}
                        {errors.skills && <span className="text-danger">This field is required</span>}

                        <input type="submit" className='btn btn-outline-success px-3 mt-4 d-block'/>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddJobPost;