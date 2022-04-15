import { useEffect, useState } from 'react';

const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('meal.json')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, []);

    return meals;
};

export default useMeals;