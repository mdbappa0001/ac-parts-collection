import React from 'react';
import photo from "../../images/myPhoto.jpg";

const MyPortfolio = () => {
    return (

        <div className='px-28'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl mt-12">
                    <figure><img src={photo} alt=" " /></figure>
                </div>

                <div className="card w-96 bg-base-200 text-primary-content mt-12">
                    <div className="card-body">
                        <h2 className='font-bold '>Name : <span className='text-xl font-bold text-red-500'>ABU TANIF MD BAPPA</span></h2><br />
                        <h2 className='font-bold'>Email : <span className='text-xl font-bold text-red-500'>abutanif366@gmail.com</span></h2><br />
                        {/* <h2><span className='text-xl font-bold'>Edu. BackGround</span> : Sylhet Agricultural University</h2> */}
                        <h2 className='font-bold'>Educational BackGround : <span className='text-xl font-bold text-red-500'>Sylhet Agricultural University.</span></h2><br />
                        <h2 className='font-bold'>Skill : <span className='text-xl font-bold text-red-500'>HTML, CSS, REACT, NodeJS, MongoDB, PowerPoint, LeaderShip.</span></h2>
                        <h2 className='font-bold'>Website Link : <br />
                        <small className=' text-green-500'>https://car-collection-13154.web.app/</small><br />
                        <small className=' text-green-500'>https://assignment-10-b30f6.web.app/</small>
                        </h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyPortfolio;