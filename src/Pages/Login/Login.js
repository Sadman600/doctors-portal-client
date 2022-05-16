import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate]);

    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-500'>Error: {error?.message || gError?.message}</p>
    }
    if (loading || gLoading) {
        return <div className='hero min-h-screen'>
            <button className="btn loading ">loading...</button>
        </div>
    }

    const submitUserWithEmailAndPassword = data => {
        createUserWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className="hero min-h-screen ">

            <div className="hero-content text-center shadow-2xl bg-base-100 w-2/6 mx-auto">
                <div className="max-w-lg">
                    <form onSubmit={handleSubmit(submitUserWithEmailAndPassword)}>

                        <div className="form-control w-full max-w-xs  ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter your email"
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

                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
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
                        {signInError}
                        <input className="btn btn-wide btn-primary" type="submit" value='Login' />
                    </form>
                    <div>
                        <label className="label">
                            <p>New to Doctors Portal?<Link to='/signup' className="label-text-alt link link-hover text-primary"> Create new an Account?</Link></p>
                        </label>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-wide btn-outline btn-secondary">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;