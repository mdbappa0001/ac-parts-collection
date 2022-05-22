import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {

const [parts, setParts] = useState([]);

useEffect( ()=>{
    fetch('parts.json')
    .then(res => res.json())
    .then(data => setParts(data))
} ,[])

    return (
        <>
        <h3 className='text-center text-4xl text-primary font-bold uppercase'>Our Parts Collection</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-12 mb-16'>
            {
                parts.map(part => <Part
                key={part._id}
                part={part}
                ></Part>)
            }
        </div>
        </>
    );
};

export default Parts;