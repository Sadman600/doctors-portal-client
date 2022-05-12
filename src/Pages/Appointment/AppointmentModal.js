import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input name='date' type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" readOnly />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Enter email address" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Enter phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;