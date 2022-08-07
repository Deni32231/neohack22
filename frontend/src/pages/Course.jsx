import React from 'react';
import { Link } from 'react-router-dom';

const Course = () => {
    return (
        <div className="mt-20 bg-slate-300 py-6 px-8 rounded-md shadow-lg text-slate-700">
            <h2 className="text-2xl text-center">Наименование курса</h2>
            <h3 className="text-xl text-black/50 text-center">(PM, Developer, Designer or other role by tag.contests)</h3>
            <div className="flex items-center justify-between">
                <span className="text-xl">Тип курса (публ/закр)</span>
                <span className="text-xl">Автор курса</span>
            </div>
            <div className="mt-20">
                <img className="w-full h-60" src="/img/zaglushka.jpg" alt="zaglushka" />
            </div>
            <div className="bg-white/30 py-6 px-4 rounded-md shadow-lg mt-20">
                <span className="text-xl">Описание курса</span>
                <p className="text-sm mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className="px-6 py-2 text-xl border-2 border-cyan-500/50 mt-10 block mx-auto">Записаться на курс</button>
            </div>
            <div className="bg-white/30 py-6 px-4 rounded-md shadow-lg mt-20">
                <span className="text-xl">Учебные материалы</span>
                <div className="flex justify-around text-xl my-8">
                    <Link to="/front/course/5/lesson/1">Урок 1</Link>
                    <Link to="/front/test/2">Тест 1</Link>
                </div>
                <div className="flex justify-around text-xl mb-8">
                    <Link to="/lesson">Урок 2</Link>
                    <Link to="/lesson/exam">Тест 2</Link>
                </div>
                <div className="flex justify-around text-xl mb-8">
                    <Link to="/lesson">Урок 1</Link>
                    <Link to="/lesson/exam">Тест 1</Link>
                </div>
                <div className="flex justify-around text-xl mb-8">
                    <Link to="/lesson">Урок 2</Link>
                    <Link to="/lesson/exam">Тест 2</Link>
                </div>
                <button className="px-6 py-2 text-xl border-2 border-cyan-500/50 mt-10 block mx-auto">Завершить курс</button>
            </div>
            <div className="mt-8 flex justify-end">
                <Link className="px-6 py-2 text-xl border-2 border-cyan-500/50 mr-10" to="/">Вернуться на главную</Link>
            </div>
        </div>
    );
};

export default Course;