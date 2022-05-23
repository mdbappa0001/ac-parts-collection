import React from 'react';


const ContactUs = () => {
    return (
        <>
            <div>

                <h1 className='text-5xl font-bold text-center mb-12 mt-16'>Contact <span className='text-secondary'>Us</span></h1>

                <div>
                    <div className="hero-content mb-16">


                        <div className="card flex-shrink-0 mr-16 w-full max-w-sm shadow-2xl bg-base-200">
                            <div className="card-body">
                                <h2 className='text-center text-3xl font-extrabold text-primary'>GET IN TOUCH</h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Number</span>
                                    </label>
                                    <input type="text" placeholder="number" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className=" btn btn-primary text-xl text-white font-bold uppercase bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Contact Us</button>
                                </div>
                            </div>
                        </div>


                        <div className='ml-16'>
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.9880764860804!2d91.84596971477777!3d21.819391585575488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaae96aaaaaab%3A0xf8689ded0a39bbd8!2sKutubdia%20Sea%20Beach!5e0!3m2!1sen!2sbd!4v1649364927705!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ContactUs;