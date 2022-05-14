import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import AppointmentService from './AppointmentService';


const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='mt-5'>
            <h1 className='text-center text-2xl text-secondary'>Available Appointments on {format(date, 'PP')}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment && <AppointmentModal
                    setTreatment={setTreatment}
                    date={date}
                    treatment={treatment}></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppoinment;