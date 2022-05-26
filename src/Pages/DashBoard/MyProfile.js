import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = event => {
        event.preventDefault();
        toast('Your information submitted successfully')
    }
    return (
        <div className='flex justify-center mt-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center text-secondary font-2xl font-extrabold mb-4">My Profile</h2>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" disabled value={user.displayName} className="input input-bordered w-full max-w-xs font-bold" />
                        <input type="text" disabled value={user.email} className="input input-bordered w-full max-w-xs font-bold" />
                        <input type="text" placeholder="Education" className="input input-bordered w-full max-w-xs"  required/>
                        <input type="text" placeholder="Location" className="input input-bordered w-full max-w-xs" required />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs"  required/>
                        <input type="submit" value="Submit" className="btn btn-secondary w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;