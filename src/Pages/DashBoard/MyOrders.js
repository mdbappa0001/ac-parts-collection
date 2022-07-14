import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`https://nameless-badlands-55078.herokuapp.com/booking?user=${user.email}`)
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
                            <th className='text-xl'>Image</th>
                            <th className='text-xl'>Name</th>

                            <th className='text-xl'>Order Quantity</th>
                            <th className='text-xl'>Address</th>
                            <th className='text-xl'>Phone</th>
                            <th className='text-xl'>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr>
                                <td className='text-xl font-bold w-24'><img src={order.img} alt="" /></td>
                                <td className='text-xl font-extrabold text-primary'>{order.partsName}</td>

                                <td className='text-xl font-bold'>{order.orderQuantity}</td>
                                <td className='text-xl font-bold'>{order.address}</td>
                                <td className='text-xl font-bold'>{order.phone}</td>
                                <td className='text-xl font-bold'>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(order.price && order.paid) &&
                                        <p><span className='text-success'>paid</span></p>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;