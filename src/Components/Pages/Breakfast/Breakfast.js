import React from 'react';
import Meal from '../Meal/Meal';
const breakfastMeals = [
    {
        id: 87639,
        img: "https://i.ibb.co/8PKKqVc/breakfast1.png",
        name: "Healthy Meal Plan",
        price: 23.99,
        text: "How we dream about our feature"
    },
    {
        id: 29876,
        img: "https://i.ibb.co/68dJjzg/breakfast2.png",
        name: "Fried Chicken",
        price: 10.30,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 73976,
        img: "https://i.ibb.co/94wrHzc/breakfast3.png",
        name: "Fried Chicken",
        price: 30.88,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 97865,
        img: "https://i.ibb.co/V9hvCpK/breakfast4.png",
        name: "Fried Chicken",
        price: 40.99,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 12345,
        img: "https://i.ibb.co/b10kBwV/breakfast5.png",
        name: "Fried Chicken",
        price: 199.99,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 87629,
        img: "https://i.ibb.co/Vpdr6nr/breakfast6.png",
        name: "Fried Chicken",
        price: 100,
        text: "This shoe is one of the best shoe i ever wear"
    }
]

const Breakfast = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    breakfastMeals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Breakfast;