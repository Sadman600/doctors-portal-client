import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
const AddDoctors = () => {
    const { isLoading, data: services } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageStorageKey = '9382f78e6ee6382ce39fb0493002c2fa';
    const onSubmit = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                if (result.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    };
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    }).then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.result.acknowledged) {
                                toast.success('Doctors added successfully')

                            } else {
                                toast.error('Doctors added faild');
                            }
                        })
                }
            })
    };
    if (isLoading) {
        return <p>Loading....</p>
    }
    return (
        <div className=" mx-auto mt-5 card w-96 bg-base-200 shadow-xl">
            <h1 className='text-3xl text-center'>Add Doctors</h1>
            <div className="card-body items-center text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Requre'
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

                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">specialization</span>
                        </label>
                        <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                            {
                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Image</span>
                        </label>
                        <input type="file" placeholder="Enter email" className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Requre'
                                },

                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}

                        </label>
                    </div>
                    <input type='submit' value='Add Doctor' className="btn btn-primary w-96 max-w-xs" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctors;
