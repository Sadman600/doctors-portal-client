import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96  bg-base-100 shadow-xl hover:shadow-2xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try anather date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <label
                    htmlFor="booking-modal"
                    onClick={() => setTreatment(service)}
                    disabled={slots.length === 0}
                    className={`btn btn-primary uppercase text-white font-bold ${slots.length === 0 ? 'bg-gray-400' : 'bg-gradient-to-r from-secondary to-primary'} `}>
                    Book Appointment</label>

            </div>
        </div>
    );
};

export default AppointmentService;