import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({ date }) => {

    return (
        <div className='mt-5'>
            <h1 className='text-center text-2xl text-secondary'>Available Appointments on {format(date, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppoinment;