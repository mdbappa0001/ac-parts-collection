import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?user=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user])

    return (
        <div>
            <h2>This is my orders : {orders.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-xl'>Name</th>
                            <th className='text-xl'>Order Quantity</th>
                            <th className='text-xl'>Address</th>
                            <th className='text-xl'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index+1}</th>
                                <td className='text-xl font-extrabold text-primary'>{order.partsName}</td>
                                <td className='text-xl font-bold'>{order.orderQuantity}</td>
                                <td className='text-xl font-bold'>{order.address}</td>
                                <td className='text-xl font-bold'>{order.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;