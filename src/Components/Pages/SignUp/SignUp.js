import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='py-16 text-center text-3xl font-semibold text-slate-900'>Create an <span className='text-red-500'>account</span></h2>
            <div className='w-1/2 mx-auto'>
                <form>
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full mb-5 px-3 py-3 rounded-lg' type="text" name="name" autoComplete='off' placeholder='Your name' />
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full mb-5 px-3 py-3 rounded-lg' type="email" name="email" autoComplete='off' placeholder='Your email' />
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full mb-5 px-3 py-3 rounded-lg' type="password" name="password" autoComplete='off' placeholder='Your Password' />
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full px-3 py-3 rounded-lg' type="password" name="confirmPassword" autoComplete='off' placeholder='Confirm your Password' />
                    <input className='w-full bg-red-600 mt-5 text-white py-3 rounded-lg' type="submit" value="Sign Up" />
                    <p className='text-center text-slate-600 mt-3'>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;