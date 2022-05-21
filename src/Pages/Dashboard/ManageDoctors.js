import React from 'react';
import { useQuery } from 'react-query';
import ManageDoctor from './ManageDoctor';

const ManageDoctors = () => {
    const { isLoading, data: doctors, refetch } = useQuery('doctors', () =>
        fetch('http://localhost:5000/doctor', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    );
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            ManageDoctors {doctors.length}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <ManageDoctor
                                key={index}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                            ></ManageDoctor>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;