import React from 'react';
import { Link } from 'react-router-dom';

const UnloginButton = () => {
    return (
        <>

            <Link to="/front/login" className="px-2 py-1 text-xl border-2 border-yellow-400 mr-6 hover:border-slate-700 focus:ring-1 rounded-md transition-all bg-yellow-400 text-slate-700">
                Вход
            </Link>
            <Link to="/front/registration" className="px-2 py-1 text-xl border-2 border-yellow-400 hover:border-slate-700 focus:ring-1 rounded-md transition-all bg-yellow-400 text-slate-700">

                Регистрация
            </Link>
        </>
    );
};

export default UnloginButton;