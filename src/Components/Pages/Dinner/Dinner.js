import React from 'react';
import Meal from '../Meal/Meal';
const dinnerMeals = [
    {
        id: 29384,
        img: "https://i.ibb.co/5FpY80r/dinner1.png",
        name: "Healthy Meal Plan",
        price: 65.99,
        text: "How we dream about our feature"
    },
    {
        id: 34546,
        img: "https://i.ibb.co/VxVSpVZ/dinner2.png",
        name: "Fried Chicken",
        price: 57.30,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 88776,
        img: "https://i.ibb.co/qMMmNf0/dinner3.png",
        name: "Fried Chicken",
        price: 38.48,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 88834,
        img: "https://i.ibb.co/g9hdFTL/dinner4.png",
        name: "Fried Chicken",
        price: 89.49,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 56564,
        img: "https://i.ibb.co/zm4y7Jj/dinner5.png",
        name: "Fried Chicken",
        price: 159.99,
        text: "This shoe is one of the best shoe i ever wear"
    },
    {
        id: 87654,
        img: "https://i.ibb.co/Xbp6S79/dinner6.png",
        name: "Fried Chicken",
        price: 68.99,
        text: "This shoe is one of the best shoe i ever wear"
    }
]

const Dinner = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    dinnerMeals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Dinner;