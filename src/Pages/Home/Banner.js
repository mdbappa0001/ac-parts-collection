import React from 'react';
import banner from "../../images/banner/banner.png";

const Banner = () => {
    return (
        <>
            <div className='w-full relative'>
                <div className='w-full h-full bg-gray-700 top-0 left-0 absolute opacity-60'></div>
                <div className='w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center'>
                    <div className='lg:block text-6xl font-bold text-white mt-16'>Yor are rest to big adventure</div>
                    <div className='text-2xl text-white mt-4'>See the world on your terms</div>
                </div>
                <img src={banner} alt="" />
            </div>
        </>
    );
};

export default Banner;