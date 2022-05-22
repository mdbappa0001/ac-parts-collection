import React from 'react';

const Part = ({ part }) => {
    const {name, img, description,minimumOrder,availableQuantity,price} = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-xl font-bold">{name}</h2>
                <h2 className='font-bold'>Price : <span className='text-primary'>{price}</span></h2>
                <h2 className='font-bold'>Available Quantity : <span className='text-primary'>{availableQuantity}</span></h2>
                <h2 className='font-bold'>Minimum Order : <span className='text-primary'>{minimumOrder}</span></h2>
                <small className='font-bold text-primary'>{description}</small>
                <div class="card-actions">
                <button class=" btn btn-primary mt-2 text-black font-bold uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Part;