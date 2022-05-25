import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Purchase = ({ partDetails, setPartDetails }) => {
    const [user, loading] = useAuthState(auth);
    const [num, setNum] = useState(100);

    const { _id, name, img, availableQuantity, price } = partDetails;

    if (loading) {
        return <Loading></Loading>
    }



    const handlePurchase = event => {
        event.preventDefault();

        const order = event.target.order.value;
        if (order < num) {
            toast('sorry sir!!! Can not order less than minimum order quantity')
        }
        else{
            toast('Congratulation sir. Your order is booked.')
            setNum(order)
        }
    


        const booking = {
            partsId: _id,
            partsName: name,
            userName: user.displayName,
            user: user.email,
            orderQuantity:order,
            address:event.target.address.value,
            phone: event.target.phone.value,
        }


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPartDetails(null);
            })


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
                        <h3 className="font-bold text-xl text-center mt-2">Available Quantity : {availableQuantity}</h3>

                        <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                            <input type="text" disabled value={_id} className="input input-bordered w-full max-w-xs font-extrabold" />
                            <input type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs font-extrabold" />
                            <input type="text" disabled value={user?.email} className="input input-bordered w-full max-w-xs font-extrabold" />
                            <input type="number" name='order' placeholder="Minimum Order Quantity = 100 " className="input input-bordered w-full max-w-xs" />
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                            <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            <input type="submit" value="Submit" className="btn btn-secondary w-80" />
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Purchase;