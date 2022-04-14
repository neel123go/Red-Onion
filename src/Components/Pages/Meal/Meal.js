import React from 'react';

const Meal = ({ meal }) => {
    const { name, price, img } = meal;
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img className='w-52' src={img} alt="" />
            </div>
            <h2 className='text-xl mt-3 font-semibold text-slate-800'>{name}</h2>
            <p className='mt-2 text-xl'>${price}</p>
        </div>
    );
};

export default Meal;