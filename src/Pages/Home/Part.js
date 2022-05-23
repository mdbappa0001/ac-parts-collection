import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, name, img, description, minimumOrder, availableQuantity, price } = part;

    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-extrabold">{name}</h2>
                    <h2 className='font-bold'>Price : <span className='text-primary'>{price}</span></h2>
                    <h2 className='font-bold'>Available Quantity : <span className='text-primary'>{availableQuantity}</span></h2>
                    <h2 className='font-bold'>Minimum Order : <span className='text-primary'>{minimumOrder}</span></h2>
                    <small className='font-bold text-primary'>{description}</small>
                    <div className="card-actions">
                        <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary mt-2 text-black font-bold uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">Purchase</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Part;