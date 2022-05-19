import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h1 className='text-3xl font-bold  text-green-600'>Welcome to your Dashboard</h1>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="my-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">

                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='review'>My Review</Link></li>

                    {
                        admin && <>
                            <li> <Link to='alluser'>All User</Link></li>
                            <li> <Link to='addDoctor'>Add Doctors</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;