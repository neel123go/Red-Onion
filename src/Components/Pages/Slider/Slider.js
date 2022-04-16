import React from 'react';

const Slider = ({ meal }) => {
    return (
        <div>
            <img className='w-3/4' src='{meal.img}' alt="" />
        </div>
    );
};

export default Slider;