import React from 'react';

const Reviews = ({ review }) => {
    const { img, name, city, description } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
            <div className="card-body">
                <p>{description}</p>
                <div className=" flex items-center mt-2">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2 className='text-xl'>{name}</h2>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;