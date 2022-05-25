import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-purple-500'>Welcome To My DashBoard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-72 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/review">Add Review</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                    <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/addProducts">Add Products</Link></li>
                    <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
                   { admin && <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;