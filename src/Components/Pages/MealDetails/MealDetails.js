import React from 'react';
import { useParams } from 'react-router-dom';
import useMeals from '../../../hooks/useMeals';

const MealDetails = () => {
    const { mealId } = useParams();
    const meals = useMeals();
    const singleMeal = meals.filter(meal => meal.id === mealId);
    console.log(singleMeal);
    return (
        <div>
            <h2>This is meal: {mealId}</h2>
        </div>
    );
};

export default MealDetails;