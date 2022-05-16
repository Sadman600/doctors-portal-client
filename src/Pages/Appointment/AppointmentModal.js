import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const AppointmentModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: e.target.phone.value

        };
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appoint is set, ${formattedDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment on ${data?.booking.date} at ${data?.booking.slot}`)
                }
                refetch()
                setTreatment(null);
            });
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input name='date' type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" readOnly />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option value={slot} key={index} >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" readOnly value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" readOnly value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Enter phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-primary w-full uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;