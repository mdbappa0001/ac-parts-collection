import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchases = ({ partDetails }) => {
    const [user, loading] = useAuthState(auth);

    const { _id, name, img, minimumOrder, availableQuantity, price } = partDetails;

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <div>
                <input type="checkbox" id="purchase-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <img className='w-28 ml-44' src={img} alt="" />
                        <h3 className="font-extrabold text-2xl text-center text-primary"> {name}</h3>
                        <h3 className="font-extrabold text-xl text-center mt-2">Price : {price}</h3>

                        <form className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                            <input type="text" disabled value={_id} className="input input-bordered w-full max-w-xs font-extrabold" />
                            <input type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs font-extrabold" />
                            <input type="text" disabled value={user?.email} className="input input-bordered w-full max-w-xs font-extrabold" />
                            <input type="number" placeholder="Minimum Order Quantity = 100 " className="input input-bordered w-full max-w-xs" />
                            <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
                            <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="Submit" className="btn btn-secondary w-80" />
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Purchases;