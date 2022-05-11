import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';
const Appointment = () => {
    return (
        <section className="flex justify-center items-center flex-col lg:flex-row" style={{ backgroundImage: `url(${appointment})` }}>
            <div className='hidden lg:block'>
                <img src={doctor} alt='' className="max-w-lg rounded-lg mt-[-100px] " />
            </div>
            <div className=' p-5 text-white'>
                <h1 className="text-secondary text-1xl font-bold py-2">Appointment</h1>
                <h1 className="text-5xl font-bold">Make an Today</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default Appointment;

