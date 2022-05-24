import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    if(loading){
        return <Loading></Loading>
    }

    const handleSubmit = event =>{
        event.preventDefault();
    }
    return (
        <div className='flex justify-center mt-12'>
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary font-2xl font-extrabold mb-4">My Profile</h2>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                    <input type="text" disabled value={user.displayName} class="input input-bordered w-full max-w-xs font-bold" />
                    <input type="text" disabled value={user.email} class="input input-bordered w-full max-w-xs font-bold" />
                    <input type="text" placeholder="Education" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Location" class="input input-bordered w-full max-w-xs" />
                    <input type="number"  placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                    <input type="submit" value="Submit" class="btn btn-secondary w-full" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default MyProfile;