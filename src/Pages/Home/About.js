import React from 'react';
import banner1 from "../../images/banner/banner1.png";

const About = () => {
    return (
        <>
            <div className="hero h-96">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} className="max-w-sm rounded-lg h-64" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className=" btn btn-primary text-black font-bold uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;