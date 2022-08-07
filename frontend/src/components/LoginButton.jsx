import React from 'react';
import { Link } from 'react-router-dom';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';

const LoginButton = () => {
    const dispatch = useDispatch(checkIsAuth);

    const logoutHandler = () => {
        dispatch(logout())  
        window.localStorage.removeItem('email');
    }


    return (
        <>
            <Link to="/front/cabinet" className="px-2 py-1 text-xl border-2 border-yellow-400 mr-6 hover:border-slate-700 focus:ring-1 rounded-md transition-all bg-yellow-400 text-slate-700">Личный кабинет</Link>
            <Link to="/front/" className="px-2 py-1 text-xl border-2 border-yellow-400 hover:border-slate-700 focus:ring-1 rounded-md transition-all bg-yellow-400 text-slate-700"
            onClick={logoutHandler}
            >Выход</Link>
        </>
    );
};

export default LoginButton;