import React from 'react';

const BusinessSummary = () => {
    return (
        <>
            <div className='mt-16 px-12 mb-16'>
                <h2 className='text-5xl text-center font-bold text-primary mb-16'>Millions <span className='text-secondary'>Of People Trust</span> Us</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-48 w-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                        </svg>
                        <h2 className='text-6xl font-extrabold ml-6'>53+</h2>
                        <p className='text-2xl text-primary ml-6 font-bold mt-2'>Countries</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h2 className='text-6xl font-extrabold ml-6'>150+</h2>
                        <p className='text-2xl text-primary ml-6 font-bold mt-2'>Happy Client</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        <h2 className='text-6xl font-extrabold ml-6'>345+</h2>
                        <p className='text-2xl text-primary ml-6 font-bold mt-2'>Feedbacks</p>
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className='text-6xl font-extrabold'>Business</h2>
                        <p className='text-2xl text-primary ml-6 font-bold mt-2'>Growth</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default BusinessSummary;