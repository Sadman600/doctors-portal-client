import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentModal from './AppointmentModal';
import AppointmentService from './AppointmentService';


const AvailableAppoinment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()));
    if (isLoading) {
        return <div className="flex items-center justify-center ">
            <div className="w-40 h-40 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
        </div>
    }
    if (error) {
        return 'An error has occurred: ' + error.message;
    }
    // useEffect(() => {

    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate]);
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
                    treatment={treatment}
                    refetch={refetch}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableAppoinment;