import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/service/${purchaseId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [purchaseId])


    return (
        <div>
            <h2>Thsi is for purchase : {purchaseId}</h2>
            <h2>name : {service.name}</h2>
        </div>
    );
};

export default Purchase;