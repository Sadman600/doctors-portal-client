import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    // 
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${user.email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => {
            if (res.status === 403) {
                toast.error('Faild to make an admin');
            }
            return res.json()
        })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('successfully made an admin');
                }
            });
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user._id}</td>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-accent">Admin</button>}</td>
            <td><button class="btn btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
        </tr>
    );
};

export default UserRow;