import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || gUser);

    const navigate = useNavigate();
    let nUserErr;
    if (error || updateError || gError) {
        nUserErr = <p>{error?.message}</p>
    }
    if (loading || updating || gLoading) {
        return <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
        </div>

    }
    if (token) {
        navigate('/appoinment');
    }
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    };
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div >

                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card flex-shrink-0  shadow-2xl bg-base-100 w-96 mx-auto">
                        <div className="card-body">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input type="text"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your email</span>
                                </label>
                                <input type="email"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
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
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Your password</span>
                                </label>
                                <input type="password"
                                    placeholder="Type here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password should be at least 6 characters' // JS only: <p>error message</p> TS only support string
                                        },
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*[a-zA-Z0-9]).{6,}$/,
                                            message: 'Provide a valid password'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <p>Already have an account?<Link to='/login' className="text-primary label-text-alt link link-hover"> Login </Link></p>
                                </label>
                            </div>
                            <div>
                                {nUserErr}
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value='Sign Up' className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" />
                            </div>
                            <div className="divider">OR</div>
                            <button onClick={() => signInWithGoogle()} className="btn btn-wide btn-outline btn-secondary">Continue with Google</button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default SignUp;