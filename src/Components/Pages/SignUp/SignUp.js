import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { EyeIcon } from '@heroicons/react/solid';

const SignUp = () => {
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        general: ''
    });
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [passEye, setPassEye] = useState(false);
    const [conPassEye, setConPassEye] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            setErrors({ ...errors, general: 'Filed must not be empty' });
        } else if (name.length < 3) {
            setErrors({ ...errors, name: 'Name must be at least 3 characters' });
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors({ ...errors, email: 'Invalid email. Please provide a valid email', name: '' });
        } else if (password.length < 8) {
            setErrors({ ...errors, password: 'Password must be at least 8 characters', email: '', name: '' });
        } else if (password !== confirmPassword) {
            setErrors({ ...errors, confirmPassword: "Password doesn't matched", email: '', name: '', password: '' });
        } else {
            setErrors({ ...errors, general: '', confirmPassword: '' });
            createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log('Sign Up Successfully')
                }).catch(error => {
                    console.error('Error neel', error);
                })
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/');
        } else {
            setErrors({ ...errors, general: error });
        }
    }, [user]);


    return (
        <div className='w-1/2 mx-auto'>
            <h2 className='pt-16 pb-3 text-center text-3xl font-semibold text-slate-900'>Create an <span className='text-red-500'>account</span></h2>
            <p className='text-red-600 text-lg pb-12 text-center'>{errors?.general}</p>
            <div className='w-1/2 mx-auto'>
                <form onSubmit={handleSignUp}>
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full px-3 py-3 rounded-lg' type="text" name="name" autoComplete='off' placeholder='Your name' />
                    <p className='text-red-600 mt-1'>{errors?.name}</p>
                    <input className='border border-slate-300 bg-slate-100 outline-none w-full mt-5 px-3 py-3 rounded-lg' type="text" name="email" autoComplete='off' placeholder='Your email' />
                    <p className='text-red-600 mt-1'>{errors?.email}</p>
                    <div className='relative'>
                        <input className='border border-slate-300 bg-slate-100 outline-none w-full mt-5 px-3 py-3 rounded-lg' type={passEye ? 'text' : 'password'} name="password" autoComplete='off' placeholder='Your Password' />
                        <span onClick={() => setPassEye(!passEye)} className='absolute top-8 right-4 cursor-pointer'><EyeIcon className='w-5 text-slate-500'></EyeIcon></span>
                    </div>
                    <p className='text-red-600 mt-1'>{errors?.password}</p>
                    <div className='relative'>
                        <input className='border border-slate-300 bg-slate-100 outline-none w-full mt-5 px-3 py-3 rounded-lg' type={conPassEye ? 'text' : 'password'} name="confirmPassword" autoComplete='off' placeholder='Confirm your Password' />
                        <span onClick={() => setConPassEye(!conPassEye)} className='absolute top-8 right-4 cursor-pointer'><EyeIcon className='w-5 text-slate-500'></EyeIcon></span>
                    </div>
                    <p className='text-red-600 mt-1'>{errors?.confirmPassword}</p>
                    <input className='w-full bg-red-600 mt-5 text-white py-3 rounded-lg' type="submit" value="Sign Up" />
                    <p className='text-center text-slate-600 mt-3'>Already have an account? <Link className='text-blue-600' to='/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;