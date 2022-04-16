import { useEffect, useState } from 'react';

const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/neel123go/Red-Onion/main/public/meals.json')
            .then(res => res.json())
            .then(data => setMeals(data));
    }, []);

    return meals;
};

export default useMeals;