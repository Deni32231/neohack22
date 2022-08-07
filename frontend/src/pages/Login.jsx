import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../redux/features/auth/authSlice';
import { getId } from '../redux/features/auth/authSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    
    console.log(status)

    const handleSubmit = () => {
        try {
            dispatch(loginUser({
                email: email,
                password,
            }))
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error);
        }
    }

    const getIdUser = () => {
        try {
            dispatch(getId(localStorage.getItem('email')))
        } catch (error){
            console.log(error)
        }
    }



    return (
        <div className="container mx-auto m-6 text-slate-700">
            <div className="mx-auto flex items-center justify-center bg-white w-96 mt-40 flex-col p-12 rounded-3xl shadow-lg">
                <span className="text-2xl">Вход</span>
                <form className="flex items-center flex-col" 
                onSubmit={e => { 
                    e.preventDefault();
                    handleSubmit();
                    // getIdUser();
                }}
                >
                    <input className="w-full p-2 mt-16 border-black/50 border-2" type="email" placeholder='Email' required onChange={e => setEmail(e.target.value)} value={email}/>
                    <input className="w-full p-2 mt-4 border-black/50 border-2" type="password" placeholder='Пароль' required onChange={e => setPassword(e.target.value)} value={password}/>
                    <button className="px-6 py-2 text-xl border-2 mx-auto mt-14 border-yellow-400 rounded-md">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;