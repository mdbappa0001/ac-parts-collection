import React, { useEffect, useState } from 'react';

const Parts = () => {

const [parts, setParts] = useState([]);

useEffect( ()=>{
    fetch('parts.json')
    .then(res => res.json())
    .then(data => setParts(data))
} ,[])

    return (
        <>
        <h3 className='text-center text-3xl font-bold uppercase'>Our Parts Collection</h3>
        <div>
            <h3>Parts : {parts.length}</h3>
        </div>
        </>
    );
};

export default Parts;