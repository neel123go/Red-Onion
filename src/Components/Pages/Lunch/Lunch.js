import React from 'react';
import useMeals from '../../../hooks/useMeals';
import Meal from '../Meal/Meal';

const Lunch = () => {
    const meals = useMeals();
    const lunchMeals = meals.filter(meal => meal.category === 'lunch');

    return (
        <div>
            <div className='mx-20 grid grid-cols-3 gap-10 gap-x-20'>
                {
                    lunchMeals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Lunch;