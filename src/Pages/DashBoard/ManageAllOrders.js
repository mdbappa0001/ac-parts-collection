import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://nameless-badlands-55078.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])

    return (
        <div>
            <h2>Manage All Orders : {allOrders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    <thead>
                        <tr>
                            <th className='text-xl'>Image</th>
                            <th className='text-xl'>Name</th>

                            <th className='text-xl'>Order Quantity</th>
                            <th className='text-xl'>Address</th>
                            <th className='text-xl'>Phone</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders?.map((allOrder, index) => <tr>
                                <td className='text-xl font-bold w-24'><img src={allOrder.img} alt="" /></td>
                                <td className='text-xl font-extrabold text-primary p-0 w-48 '>{allOrder.partsName}</td>

                                <td className='text-xl font-bold'>{allOrder.orderQuantity}</td>
                                <td className='text-xl font-bold'>{allOrder.address}</td>
                                <td className='text-xl font-bold'>{allOrder.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;