import React, { useEffect, useState } from 'react';
import Part from './Part';
import Purchases from './Purchases';

const Parts = () => {

const [parts, setParts] = useState([]);
const [partDetails, setPartDetails] = useState(null);

useEffect( ()=>{
    fetch('http://localhost:5000/service')
    .then(res => res.json())
    .then(data => setParts(data))
} ,[])

    return (
        <>
        <h3 className='text-center text-4xl text-primary font-bold uppercase'>Our Parts Collection</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-12 mb-16'>
            {
                parts.slice(0,3).map(part => <Part
                key={part._id}
                part={part}
                setPartDetails={setPartDetails}
                ></Part>)
            }
        </div>
        {partDetails && <Purchases partDetails={partDetails}></Purchases>}
        </>
    );
};

export default Parts;