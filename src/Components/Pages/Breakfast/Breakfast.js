import React from 'react';
import useMeals from '../../../hooks/useMeals';
import Meal from '../Meal/Meal';

const Breakfast = () => {
    const meals = useMeals();
    const breakfastMeals = meals.filter(meal => meal.category === 'breakfast');
    return (
        <div>
            <div className='mx-20 grid grid-cols-3 gap-10 gap-x-20'>
                {
                    breakfastMeals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Breakfast;