import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';
const Services = () => {
    const services = [
        { _id: 1, name: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: fluoride },
        { _id: 1, name: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: cavity },
        { _id: 1, name: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the', img: whitening },
    ];
    return (
        <div className='my-12'>
            <div className='text-center '>
                <h1 className='text-primary text-2xl font-bold uppercase p-2'>Our Services</h1>
                <h2 className='text-4xl'>Service We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5  mt-10 '>
                {
                    services.map(service => <Service key='_id' service={service}></Service>)
                }
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row w-5/6 ">
                        <img className="max-w-sm rounded-lg shadow-2xl" src={treatment} alt='' />
                        <div className='p-12'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader
                                will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsumis that
                                it has a more-or-less normal distribution of letters,as
                                opposed to using 'Content here, content here', making it
                                look like readable English. Many desktop publishing packages
                                and web page</p>
                            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;