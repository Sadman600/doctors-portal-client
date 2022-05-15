import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div >

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-96 mx-auto">
                        <div className="card-body">
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your name</span>
                                </label>
                                <input type="text"
                                    placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your email</span>
                                </label>
                                <input type="email"
                                    placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message: 'Provide a valid email'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your password</span>
                                </label>
                                <input type="password"
                                    placeholder="Type here"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },

                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <p>Already have an account?<Link to='/login' className="text-primary label-text-alt link link-hover"> Login </Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Sign Up' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;