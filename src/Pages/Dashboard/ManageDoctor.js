import React from 'react';
import { toast } from 'react-toastify';

const ManageDoctor = ({ doctor, index, refetch }) => {
    const { img, name, email, specialty } = doctor;
    const removeDoctor = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Doctors: ${name} is delete`);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <th><div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={img} alt='' />
                </div>
            </div></th>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>{email}</td>
            <td><button onClick={() => removeDoctor(email)} class="btn btn-square btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default ManageDoctor;