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
                        <p className="py-6 font-bold">Our technicians are experts in taking care of any heating or cooling issue that you have. We specialize in everything from AC installation, repair and maintenance/service. Locally Owned Operated. Licensed and Insured. No Surprise Pricing. Financing Available. Special Offers. No Overtime Charges. Superior Customer Service. $49 HVAC Tune Up Special. Services:</p>
                        <button className=" btn btn-primary text-black font-bold uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;