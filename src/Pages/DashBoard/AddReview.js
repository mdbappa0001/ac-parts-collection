import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        //   console.log(data);
        const url = `https://nameless-badlands-55078.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Your Review Added SuccessFully.')
            })
    };


    return (
        <div className='flex justify-center mt-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-blue-700 font-2xl font-extrabold mb-4">Please Add Your Review</h2>
                    <form className='grid grid-cols-1 gap-3 justify-items-center' onSubmit={handleSubmit(onSubmit)}>
                        <input className="input input-bordered w-full max-w-xs" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <textarea className="input input-bordered w-full max-w-xs" placeholder='Description' {...register("description")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Rating 1 to 5' type="number" {...register("price")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Photo URL' type="text" {...register("img")} />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;