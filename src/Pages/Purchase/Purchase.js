import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Purchase = ({partDetails, setPartDetails}) => {
    const [user, loading] = useAuthState(auth);

    const {_id, name, img, minimumOrder, availableQuantity, price } = partDetails;

    if (loading) {
        return <Loading></Loading>
    }

    const handlePurchase = event =>{
        event.preventDefault();
        console.log(_id, name, minimumOrder);
        setPartDetails(null);
    }


    return (
        <>
           <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="purchase-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='w-28 ml-44' src={img} alt="" />
                    <h3 class="font-extrabold text-2xl text-center text-primary"> {name}</h3>
                    <h3 class="font-extrabold text-xl text-center mt-2">Price : {price}</h3>

                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled value={_id} class="input input-bordered w-full max-w-xs font-extrabold" />
                        <input type="text" disabled value={user?.displayName} class="input input-bordered w-full max-w-xs font-extrabold" />
                        <input type="text" disabled value={user?.email} class="input input-bordered w-full max-w-xs font-extrabold" />
                        <input type="number" placeholder="Minimum Order Quantity = 100 " class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary w-80" />
                    </form>

                </div>
            </div>
        </div>
            
        </>
    );
};

export default Purchase;