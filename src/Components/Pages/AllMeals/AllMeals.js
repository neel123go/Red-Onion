import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const AllMeals = () => {
    return (
        <div className='px-40 my-20 text-center'>
            <div className='mb-20 flex justify-center'>
                <CustomLink className='mx-8 font-semibold text-slate-900' to={`/home/breakfast`}>Breakfast</CustomLink>
                <CustomLink className='mx-8 font-semibold text-slate-900' to={`/home/lunch`}>Lunch</CustomLink>
                <CustomLink className='mx-8 font-semibold text-slate-900' to={`/home/dinner`}>Dinner</CustomLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AllMeals;