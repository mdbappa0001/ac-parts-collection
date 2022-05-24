import React, { useEffect, useState } from 'react';
import AllPart from './AllPart';
import Purchase from './Purchase';

const AllParts = () => {
    const [allParts, setAllParts] = useState([]);
    const [partDetails, setPartDetails] = useState(null);

    useEffect( () =>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setAllParts(data))
       
    } ,[allParts])

    return (
        <>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 px-12 mb-28'>
            {
                allParts.map(part => <AllPart
                key={part._id}
                part = {part}
                setPartDetails={setPartDetails}
                ></AllPart>)
            }
        </div>
        {partDetails && <Purchase
         partDetails={partDetails}
         setPartDetails={setPartDetails}
         ></Purchase>}
        </>
    );
};

export default AllParts;