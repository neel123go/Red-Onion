import React from 'react';
import useMeals from '../../../hooks/useMeals';
import Meal from '../Meal/Meal';

const Dinner = () => {
    const meals = useMeals();
    const dinnerMeals = meals.filter(meal => meal.category === 'dinner');

    return (
        <div>
            <div className='mx-20 grid grid-cols-3 gap-10 gap-x-20'>
                {
                    dinnerMeals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Dinner;