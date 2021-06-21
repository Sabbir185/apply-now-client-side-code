import React from 'react';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Plan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = async data => {
        const { support, notification, hours, plan, cost } = data;
        const info = {
            support: support,
            notification: notification,
            hours: parseInt(hours),
            plan: plan,
            cost: parseInt(cost)
        }
        await axios.post('https://limitless-caverns-42128.herokuapp.com/plan', info)
            .then(res => {
                if (res) {
                    alert('Data insert successful!');
                    history.push('/admin');
                }
            })
    };


    return (
        <div>
            <MainNavbar />
            <div className="row">
                <div className="col-3"> <Sidebar /> </div>
                <div className="col mt-5 ml-5">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" {...register("support", { required: true })} className="form-control w-50 mb-2" placeholder="Support" />
                        {/* errors will return when field validation fails  */}
                        {errors.support && <span className="text-danger">This field is required</span>}

                        <input type="text" {...register("notification", { required: true })} className="form-control w-50 mb-2" placeholder="Notification" />
                        {/* errors will return when field validation fails  */}
                        {errors.notification && <span className="text-danger">This field is required</span>}

                        <input type="number" {...register("hours", { required: true })} className="form-control w-50 mb-2" placeholder="hours" />
                        {/* errors will return when field validation fails  */}
                        {errors.hours && <span className="text-danger">This field is required</span>}

                        <input type="text" {...register("plan", { required: true })} className="form-control w-50 mb-2" placeholder="Plan" />
                        {/* errors will return when field validation fails  */}
                        {errors.plan && <span className="text-danger">This field is required</span>}

                        <input type="number" {...register("cost", { required: true })} className="form-control w-50 mb-2" placeholder="cost" />
                        {/* errors will return when field validation fails  */}
                        {errors.cost && <span className="text-danger">This field is required</span>}

                        <input type="submit" className="mt-3 btn btn-outline-success d-block" />

                    </form>
                </div>
            </div>
        </div >
    );
};

export default Plan;