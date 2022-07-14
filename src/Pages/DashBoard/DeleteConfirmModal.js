import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ allPart, setAllParts, deletingPart, setDeletingPart }) => {

    const { name } = deletingPart;


    const handleDelete = id => {
        const url = `https://nameless-badlands-55078.herokuapp.com/service/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product : ${name} is deleted`)
                    const remaining = allPart.filter(allPart => allPart._id !== id)
                    setAllParts(remaining);
                    setDeletingPart(null);
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-800">Are You Sure You Want To Delete : <span className='text-xl font-extrabold'>{name}</span></h3>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(allPart._id)} class="btn btn-xs btn-error">Delete Product</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;