import { EyeIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';

const Login = () => {
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [passEye, setPassEye] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === '' || password === '') {
            setErrors({ ...errors, general: 'Filed must not be empty' });
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: 'Invalid email. Please provide a valid email', name: '' });
        } else if (password.length < 8) {
            setErrors({ ...errors, password: 'Password must be at least 8 characters', email: '', name: '' });
        } else {
            setErrors({ ...errors, general: '', confirmPassword: '' });
            signInWithEmailAndPassword(email, password);
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user]);

    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='pt-16 pb-3 text-center text-3xl font-semibold text-slate-900'>Please <span className='text-red-500'>Login</span></h2>
            <p className='text-red-600 text-lg pb-12 text-center'>{error?.message}</p>
            <div className='w-1/2 mx-auto'>
                <form onSubmit={handleLogin}>
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full px-3 py-3 rounded-lg' type="text" name="email" autoComplete='off' placeholder='Your email' />
                    <p className='text-red-600 mt-1'>{errors?.email}</p>
                    <div className='relative'>
                        <input className='border border-slate-300 bg-slate-100 outline-none w-full mt-5 px-3 py-3 rounded-lg' type={passEye ? 'text' : 'password'} name="password" autoComplete='off' placeholder='Your Password' />
                        <span onClick={() => setPassEye(!passEye)} className='absolute top-8 right-4 cursor-pointer'><EyeIcon className='w-5 text-slate-500'></EyeIcon></span>
                    </div>
                    <p className='text-red-600 mt-1'>{errors?.password}</p>
                    <input className='w-full bg-red-600 mt-8 text-white py-3 rounded-lg' type="submit" value="Login" />
                    <p className='text-center text-slate-600 mt-3'>Don't have any account? <Link className='text-blue-600' to='/signup'>Sign Up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;