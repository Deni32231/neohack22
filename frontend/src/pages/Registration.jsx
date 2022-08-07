import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/features/auth/authSlice';
import { getId } from '../redux/features/auth/authSlice';

const Registration = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');
    const dispatch = useDispatch();
    // const {userId} = useSelector((state) => state.auth)


    const chengeRadioValue = (e) => {
        setRole(e.target.value);
    }

    const handleSubmit = () => {
        try {
            dispatch(registerUser({
                email: email,
                firstName: userName,
                lastName: userName,
                password: password,
                role: role
            }))
            setUserName('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log('error');
        }
    }

    const getIdUser = () => {
        try {
            dispatch(getId({
                email: email
            }))
        } catch (error){
            console.log(error)
        }
    }

    
    return (
    <div className="container mx-auto m-6 text-slate-700">
        <div className="mx-auto flex items-center justify-center bg-white w-96 mt-40 flex-col p-12 rounded-3xl shadow-lg">
            <span className="text-2xl">Регистрация</span>
            <form className="flex items-center flex-col"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                // getIdUser();
            }}
            >
                <input className="w-full p-2 mt-16 border-black/50 border-2" type="text" placeholder='Фамилия Имя' required
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <input className="w-full p-2 mt-4 border-black/50 border-2" type="email" placeholder='Email' required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input className="w-full p-2 mt-4 border-black/50 border-2" type="password" placeholder='Пароль' required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label className="w-full mt-6 cursor-pointer">
                    <input type="radio" name="role"
                        checked={role == 'STUDENT' ? true : false}
                        value="STUDENT"
                        onChange={chengeRadioValue}
                    /> студент
                </label>
                <label className="w-full mt-3 cursor-pointer">
                    <input type="radio" name="role"
                        checked={role == 'TEACHER' ? true : false}
                        value="TEACHER"
                        onChange={chengeRadioValue}
                    /> преподаватель
                </label>
                <button className="px-6 py-2 text-xl border-2 border-yellow-400 mx-auto mt-14" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    </div>
    );
};

export default Registration;