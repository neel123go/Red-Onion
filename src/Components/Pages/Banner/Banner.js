import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='mx-auto pt-40 w-2/3'>
                <h2 className='text-5xl text-slate-800 font-semibold text-center'>Best food waiting for your belly</h2>
                <div className='flex justify-center items-center mt-10'>
                    <input className='w-2/5 rounded-full outline-none text-ms text-slate-700 px-5 py-3' type="text" placeholder='search food items' />
                    <button className='bg-red-600 text-white px-8 ml-[-50px] py-3 rounded-full'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;