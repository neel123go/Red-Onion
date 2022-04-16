import { ShoppingCartIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../../../hooks/useMeals';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/solid';

const MealDetails = () => {
    const { mealId } = useParams();
    const meals = useMeals();
    const singleMeal = meals.filter(meal => parseInt(meal.id) === parseInt(mealId));
    const sliderMeals = meals.filter(meal => singleMeal[0].category === 'breakfast');
    const [count, setCount] = useState(1);
    const mainPrice = singleMeal[0]?.price;
    const price = (count * mainPrice).toFixed(2);
    const [error, setError] = useState('');
    const [sliderImgCount, setSliderImgCount] = useState(0);
    const sliderImg = sliderMeals.map(meal => meal.img);

    const previousBtn = () => {
        if (sliderImgCount <= 0) {
            setSliderImgCount(sliderImg.length - 2);
        } else {
            setSliderImgCount(sliderImgCount - 1);
        }
    }
    const nextBtn = () => {
        if (sliderImgCount >= (sliderImg.length - 2)) {
            setSliderImgCount(0);
        } else {
            setSliderImgCount(sliderImgCount + 1);
        }
    }
    console.log(sliderImgCount)

    return (
        <div className='flex justify-between items-center mx-40 py-20'>
            <div className='w-1/2'>
                <h1 className='text-5xl font-semibold text-slate-800'>Light Breakfast</h1>
                <p className='my-8 w-4/5 text-slate-500'>{singleMeal[0]?.details}</p>
                <div className='flex'>
                    <h2 className='mr-5 text-4xl text-slate-900'>${price}</h2>
                    <div className='flex w-30 items-center border rounded-3xl justify-between px-6 py-2 border-gray-400'>
                        <button disabled={count <= 1} onClick={() => setCount(count - 1)} className='text-xl mr-4 text-red-500'>-</button>
                        <p className='text-xl'>{count}</p>
                        <button onClick={() => count <= 4 ? setCount(count + 1) : setError('You cannot order more than 5 meal.')} className='text-xl text-red-500 ml-4'>+</button>
                    </div>
                </div>
                <p className='text-red-500 mt-3'>{error}</p>
                <button className='mt-8 bg-red-500 flex items-center px-7 py-3 text-white rounded-3xl text-md'><ShoppingCartIcon className='w-5 text-white mr-2'></ShoppingCartIcon> Add</button>


                <div className='flex items-center mt-10  w-full h-60'>
                    <button onClick={previousBtn}><ChevronLeftIcon className='w-8 text-slate-700'></ChevronLeftIcon></button>
                    <div className='flex items-center'>
                        <img className='w-60 px-8 py-5' src={sliderImg[sliderImgCount + 1]} alt="" />
                        <img className='w-60 px-8 py-5' src={sliderImg[sliderImgCount]} alt="" />
                    </div>
                    <button onClick={nextBtn}><ChevronRightIcon className='w-8 text-slate-700'></ChevronRightIcon></button>

                </div>







            </div>
            <div className='flex w-1/2 justify-center items-center'>
                <img className='w-4/5' src={singleMeal[0]?.img} alt="" />
            </div>
        </div>
    );
};

export default MealDetails;