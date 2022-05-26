import React from 'react';
import banner from "../../images/banner/banner.png";

const Banner = () => {
    return (
        <>
            <div className='w-full relative'>
                <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-60'></div>
                <div className='w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center'>
                    <div className='lg:block text-4xl font-extrabold text-red-400 mt-16'>We have different varieties Collection</div>
                    <div className='text-2xl text-gray-300 mt-4'>See our best collection and Enjoy.</div>
                </div>
                <img src={banner} alt="" />
            </div>
        </>
    );
};

export default Banner;