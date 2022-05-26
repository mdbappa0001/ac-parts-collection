import React, { useState } from 'react';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
        .then(data => setUsers(data))
    return (
        <div>
            <h2>Maake Admin : {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => <AdminRow
                        key={user?.index}
                        user={user}
                        index = {index}
                        ></AdminRow>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;