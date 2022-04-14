import React from 'react';
import Meal from '../Meal/Meal';
const lunchMeals = [
    {
        id: 88839,
        img: "https://i.ibb.co/wgd6gvJ/lunch1.png",
        name: "Healthy Meal Plan",
        price: 44.99,
        text: "How we dream about our feature"
    },
    {
        id: 24354,
        img: "https://i.ibb.co/0CCbLgS/lunch2.png",
        name: "Fried Chicken",
        price: 40.30,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 93849,
        img: "https://i.ibb.co/CsxsCSV/lunch4.png",
        name: "Fried Chicken",
        price: 35.85,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 22883,
        img: "https://i.ibb.co/CsxsCSV/lunch4.png",
        name: "Fried Chicken",
        price: 60,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 77676,
        img: "https://i.ibb.co/CPbwjDX/lunch5.png",
        name: "Fried Chicken",
        price: 69.99,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 23453,
        img: "https://i.ibb.co/XbC3nC5/lunch6.png",
        name: "Fried Chicken",
        price: 120,
        text: "This shoe is one of the best shoe i ever wear"
    }
]

const Lunch = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    lunchMeals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Lunch;