import React from 'react';

const HandleManageProduct = ({ allPart, setAllParts, setDeletingPart }) => {
    const { img, name, price, _id } = allPart;

    return (
        <>
            <div class="overflow-x-auto"><tr>
                <td className='text-xl font-bold w-24 '><img src={img} alt="" /></td>
                <td className='text-xl font-extrabold text-primary p-0 w-48 '>{name}</td>
                <td className='text-xl font-extrabold'>{price}</td>
                <td className='text-xl font-extrabold'>{_id}</td>
                <td>
                    <label onClick={() => setDeletingPart(allPart)} for="delete-confirm-modal" class="btn btn-xs btn-error">DELETE</label>
                </td>
            </tr>
            </div>
        </>
    );
};

export default HandleManageProduct;