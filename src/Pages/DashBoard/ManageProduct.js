import React, { useEffect, useState } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import HandleManageProduct from './HandleManageProduct';


const ManageProduct = () => {
    const [allParts, setAllParts] = useState([]);
    const [deletingPart, setDeletingPart] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAllParts(data))

    }, [allParts])

    return (
        <>
            <h2>Manage All Product : {allParts.length}</h2>
           

            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                
                    <tbody>
                    {
                    allParts.map(allPart => <HandleManageProduct
                    key={allPart._id}
                    allPart={allPart}
                    setAllParts={setAllParts}
                    setDeletingPart={setDeletingPart}
                    ></HandleManageProduct>)
                }
                    </tbody>
                </table>
            </div>
           {deletingPart && <DeleteConfirmModal
           setAllParts={setAllParts}
           deletingPart={deletingPart}
           setDeletingPart={setDeletingPart}
           ></DeleteConfirmModal>}
        </>
    );
};

export default ManageProduct;