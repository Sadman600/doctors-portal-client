import React from 'react';
import quote from '../../assets/icons/quote.svg';
import Reviews from './Reviews';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
const Testimonial = () => {
    const reviews = [
        {
            _id: 1, img: people1, name: 'Jhon Doe', city: 'California',
            description: 'Had it not been for Best Doctors, I would have had a hugely more invasive procedure that would have limited function and extended my recovery time.'
        },
        {
            _id: 2, img: people2, name: 'Mery Hans', city: 'California',
            description: 'I don’t know how to put Best Doctors’ overall concern and sincerity of caring into words.'
        },
        {
            _id: 3, img: people3, name: 'Angels', city: 'California',
            description: 'Best Doctors made sure Bruce had the information he needed to make the best decision for him.'
        },

    ];
    return (
        <section className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-secondary text-2xl font-bold py-2'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='h-36' src={quote} alt=''></img>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }

            </div>
        </section>
    );
};

export default Testimonial;