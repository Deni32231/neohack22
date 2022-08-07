import React from 'react';
import { Link } from 'react-router-dom';

const Lesson = () => {
    return (
        <div className="mt-20 bg-slate-300 py-6 px-8 rounded-md shadow-lg text-slate-700">
            <h2 className="text-4xl text-center">Наименование урока</h2>
            <div className="bg-white/30 py-6 px-4 rounded-md shadow-lg mt-20">
                <div className="my-8 flex justify-center">
                    <iframe title="testVideo" width="720" height="405" src="https://rutube.ru/play/embed/f5f4421c6626b7f5f3f4e8eee83099c8" 
                    frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen="true" mozallowfullscreen="true" allowFullScreen="true">
                    </iframe>  
                </div>
            
                <h3 className="text-2xl mt-16">Текстовое наполнение урока :</h3>
                <p className="mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div>
                    <p className="text-2xl mt-16 text-center">Наименование теста</p>
                    <button className="px-6 py-2 text-xl border-2 border-cyan-500/50 mt-10 block mx-auto">Пройти тест</button>
                </div>
            </div>
            <div className="flex justify-end mt-10">
                <Link className="px-6 py-2 text-xl border-2 border-cyan-500/50 mr-10" to="/">Завершить просмотр урока</Link>
            </div>
            <div className="bg-white/30 py-6 px-4 rounded-md shadow-lg mt-20">
                <span className="text-2xl">Успеваемость студентов</span>
                <ul className="mt-10">
                    <li>Студент - успеваемость</li>
                    <li>Студент - успеваемость</li>
                    <li>Студент - успеваемость</li>
                </ul>
            </div>
        </div>
    );
};

export default Lesson;