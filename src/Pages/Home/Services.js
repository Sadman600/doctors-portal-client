import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
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
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12 mt-10 '>
                {
                    services.map(service => <Service key='_id' service={service}></Service>)
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default Services;