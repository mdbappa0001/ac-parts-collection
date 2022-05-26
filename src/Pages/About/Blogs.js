import React from 'react';
import react from "../../images/react.png";
import Footer from '../Shared/Footer';

const Blogs = () => {
    return (
        <>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={react} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-3xl font-bold text-red-600">Q-1. <span className='text-red-900'>How will you improve the performance of a React Application?</span></h1>
                            <p className="py-3"> 1.Keeping component state local where necessary. </p>
                            <p className="py-2"> 2. Memoizing React components to prevent unnecessary re-renders. </p>
                            <p className="py-2"> 3. Code-splitting in React using dynamic import(). </p>
                            <p className="py-2"> 4. Windowing or list virtualization in React applications. </p>
                            <p className="py-2"> 5. Lazy loading images in React. </p>
                            <p className="py-3 font-bold"> To successfully optimize our React application, we must first find a performance problem in our application to rectify. In this guide, we have explained how to measure the performance of a React application and how to optimize the performance for a better user experience.</p>

                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-red-600 text-3xl">Q-2. <span className='text-red-900'>What are the different ways to manage a state in a React application?</span></h2>
                        <p className='text-xl font-bold text-primary'>There are four main types of state we need to properly manage in our React application:</p>
                        <ul>
                            <li className='text-xl font-bold'>1. Local state</li>
                            <li className='text-xl font-bold'>2. Global state</li>
                            <li className='text-xl font-bold'>3. Server state</li>
                            <li className='text-xl font-bold'>4. URL state</li>
                        </ul>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl mt-12 mb-12">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-red-600 text-3xl">Q-3. <span className='text-red-900'>What is a unit test? Why should write unit tests?</span></h2>
                        <p className='text-xl  text-primary mt-4'>Unit Testing is a method by which individual units of source code are tested to determine if they are fit for use.</p>
                        <p className='text-xl'>Its goal is to isolate each part of the program and show that the individual parts are correct.</p>
                        <p className='text-xl mb-4'>যেমনঃ কোন একটা ক্যালকুলেটর তৈরির পর সেটা মার্কেটে যাবার আগে এর প্রত্যেকটা পার্টস আলাদা আলাদাভাবে সবকিছু ঠিক আছে কিনা চেক করা।যেমনঃ এখানে individual parts বলতে মূলত একটা ক্যালকুলেটরের যোগ / বিয়োগ / গুণ / ভাগ অংশ আলাদা আলাদা ভাবে চেক করে দেখা।</p>
                        <ul>
                            <p>Unit Testing করার কারণঃ </p>
                            <li className='font-bold'>1. It reduces the level of bugs in production code.</li>
                            <li className='font-bold'>2. It saves our development time.</li>
                            <li className='font-bold'>3. It saves time in debugging later.</li>
                            <li className='font-bold'>4. A good unit test are a form of documentation.</li>
                            <li className='font-bold'>5. Unit test forces us to confront the problem head on.</li>
                            <li className='font-bold'>6. It allows us to make big changes to code quickly.</li>

                        </ul>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl mt-12 mb-12">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-red-600 text-3xl">Q-4. <span className='text-red-900'>Why you do not set the state directly in React?</span></h2>
                        <p className='text-xl  text-primary mt-4'>নিম্নোক্ত কারণে আমরা সেট স্টেট কে ডাইরেক্টলি কল করতে পারবো নাঃ</p>
                            <ul>
                            <li className='font-bold'>1. যখন সেট স্টেটকে ডাইরেক্টলি কল করা হয় তখন সেটা সাথে সাথে আপডেট হয় না, বরং সেটা একটি লোডিং স্টেট সৃষ্টি করে।মানে সাথে সাথে ডিক্লেয়ার করলে fetch কৃত ডাটা গুলো সার্ভার থেকে আসতে কিছুক্ষণ সময় নেয়।তাই আমরা নরমালি এই ক্ষেত্রে একটা লোডিং স্পিনার সেট করে দেই।তাই আমরা সাথে সাথে আপডেটকৃত ভ্যালু পাই না।</li>
                            <li className='font-bold'>2. By accessing it after calling this method will only return the present value.</li>
                            <li className='font-bold'>3. You will lose control of the state across all components.</li>
                        </ul>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-xl mt-12 mb-12">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-red-600 text-3xl">Q-5. <span className='text-red-900'>How does prototypical inheritance work?</span></h2>
                        <p className='text-xl  text-primary mt-4'>Prototypical Inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor.</p>
                            <ul>
                            <li className='font-bold'>1.  Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</li>
                            <li className='font-bold'>2. Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. </li>
                            <li className='font-bold'>3.This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.</li>
                        </ul>
                    </div>
                </div>


            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;