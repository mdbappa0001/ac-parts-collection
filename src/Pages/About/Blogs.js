import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-3xl font-bold text-red-600">Q. <span className='text-red-900'>How will you improve the performance of a React Application?</span></h1>
                        <p class="py-3"> 1.Keeping component state local where necessary. </p>
                        <p class="py-2"> 2. Memoizing React components to prevent unnecessary re-renders. </p>
                        <p class="py-2"> 3. Code-splitting in React using dynamic import(). </p>
                        <p class="py-2"> 4. Windowing or list virtualization in React applications. </p>
                        <p class="py-2"> 5. Lazy loading images in React. </p>
                        <p class="py-3 font-bold"> To successfully optimize our React application, we must first find a performance problem in our application to rectify. In this guide, we have explained how to measure the performance of a React application and how to optimize the performance for a better user experience.</p>

                    </div>
                </div>
            </div>


            <div class="card bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-red-600 text-3xl">Q. <span className='text-red-900'>What are the different ways to manage a state in a React application?</span></h2>
                    <p className='text-xl font-bold text-primary'>There are four main types of state we need to properly manage in our React application:</p>
                    <ul>
                        <li className='text-xl font-bold'>1. Local state</li>
                        <li className='text-xl font-bold'>2. Global state</li>
                        <li className='text-xl font-bold'>3. Server state</li>
                        <li className='text-xl font-bold'>4. URL state</li>
                    </ul>
                </div>
            </div>



        </div>
    );
};

export default Blogs;