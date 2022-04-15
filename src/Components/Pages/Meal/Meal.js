import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { id, name, price, img } = meal;
    const navigate = useNavigate();
    const handleMealDetails = () => {
        navigate(`/meal-details/${id}`);
    }

    return (
        <div onClick={handleMealDetails} className='hover:shadow-xl py-10 rounded-lg duration-300'>
            <div className='flex justify-center items-center'>
                <img className='w-52' src={img} alt="" />
            </div>
            <h2 className='text-xl mt-3 font-semibold text-slate-800'>{name}</h2>
            <p className='mt-2 text-xl'>${price}</p>
        </div>
    );
};

export default Meal;