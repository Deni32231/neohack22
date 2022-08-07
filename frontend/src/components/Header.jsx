import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import UnloginButton from './UnloginButton';
import LoginButton from './LoginButton';
import { checkIsAuth } from '../redux/features/auth/authSlice';
import { useSelector } from 'react-redux';

const Header = ({ children }) => {
    const isAuth = useSelector(checkIsAuth)
    

    return (
        <div className="container mx-auto py-6">
            <div className="flex justify-between items-center">
                <Link to="/front/" className="flex items-center"><img className='w-12 m-0' src="/img/logo.svg" alt="logo" /><span className="ml-5 text-2xl">Образовательная платформа</span></Link>

                <Link to="/front/" className="text-4xl border-x-2 border-yellow-400 px-4 hover:text-yellow-400 transition-all">Каталог курсов</Link>

                <div>
                    { !isAuth ? <UnloginButton /> : <LoginButton/>}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Header;