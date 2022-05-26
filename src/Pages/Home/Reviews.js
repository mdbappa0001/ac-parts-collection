import React, { useEffect, useState } from 'react';
import review1 from "../../images/review/pic-1.png";
import review2 from "../../images/review/pic-2.png";
import review3 from "../../images/review/pic-3.png";
import quote from "../../images/quote-img.png";

const Reviews = () => {
    const [allReviews, setAllReviews] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setAllReviews(data))
       
    } ,[allReviews])

    return (
        <>

            <h1 className='text-5xl font-bold text-center'>Customer <span className='text-secondary'>Review</span></h1>


            <div className='mt-16 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>

                <div>
                    <img src={quote} alt="" />
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review1} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>William Cox</h4>
                                <small className='font-extrabold'>*Canada</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img src={quote} alt="" />
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review2} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Mohammad Russel.</h4>
                                <small className='font-extrabold'>*Soudi Arabia</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <img src={quote} alt="" />
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='font-bold'>This is the best collection i have ever seen.Buying this product i have enjoyed a lot.I hope you will also try it and enjoy a lot.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className="avatar px-8 py-5">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review3} alt='' />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold'>Chris Rox</h4>
                                <small className='font-extrabold'>*USA</small>
                            </div>
                        </div>
                    </div>
                </div>



               <div className='mt-8 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-screen'>
                   {
                       allReviews.map(allReview => 

                        <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p className='font-bold'>{allReview.description}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className="avatar px-8 py-5">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                        <img src={allReview.img} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <h4 className='text-xl font-bold'>{allReview.name}</h4>
                                    <small className='font-extrabold'>*{allReview.price}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                   }
               </div>



            </div>

            
        </>
    );
};

export default Reviews;