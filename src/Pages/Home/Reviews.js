import React from 'react';
import review1 from "../../images/review/pic-1.png";
import review2 from "../../images/review/pic-2.png";
import review3 from "../../images/review/pic-3.png";
import quote from "../../images/quote-img.png";

const Reviews = () => {
    return (
        <>

<h1 className='text-5xl font-bold text-center'>Customer <span className='text-secondary'>Review</span></h1>


            <div className='mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>

                <div>
                    <img src={quote} alt="" />
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur ullam expedita repellendus omnis quidem.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review1} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>William Cox</h4>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                <img src={quote} alt="" />
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur ullam expedita repellendus omnis quidem.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review2} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>William Cox</h4>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img src={quote} alt="" />
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum pariatur ullam expedita repellendus omnis quidem.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review3} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>William Cox</h4>
                                <p>Canada</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Reviews;