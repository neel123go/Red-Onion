import React from 'react';

const Login = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='py-10 text-center text-2xl font-semibold text-slate-900'>Please Login</h2>
            <div className='w-1/2 mx-auto'>
                <form>
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full mb-5 px-3 py-3 rounded-lg' type="email" name="email" autoComplete='off' placeholder='Your email' />
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full px-3 py-3 rounded-lg' type="password" name="password" autoComplete='off' placeholder='Your Password' />
                    <input className='w-full bg-red-600 mt-5 text-white py-3 rounded-lg' type="submit" value="Login" />
                    <p className='text-center text-slate-600 mt-3'>Don't have any account?</p>
                </form>
            </div>
        </div>
    );
};

export default Login;