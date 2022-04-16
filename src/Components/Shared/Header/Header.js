import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo2.png';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='h-20 px-28 flex justify-between items-center'>
            <div>
                <Link to='/'><img className='w-36' src={Logo} alt="" /></Link>
            </div>
            <div>
                <nav className='flex items-center'>
                    <Link className='mr-7' to='/cart'><ShoppingCartIcon className='w-7 text-slate-900'></ShoppingCartIcon></Link>
                    {
                        user ? <button onClick={() => signOut(auth)} className='bg-red-600 text-white px-5 py-2 rounded-3xl'>Sign Out</button>
                            :
                            <div>
                                <Link className='text-slate-900 mr-7 text-lg' to='/login'>Login</Link>
                                <Link className='bg-red-600 text-white px-5 py-2 rounded-3xl' to='/signup'>Sign Up</Link>
                            </div>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;