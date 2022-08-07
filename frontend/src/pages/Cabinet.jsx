import React from 'react';

const Cabinet = () => {
    return (
        <div className="container mx-auto mt-12 bg-slate-300 py-6 px-4 rounded-md shadow-lg">
            <span className="text-4xl mx-auto">Кабинет ученика</span>
            <div className="flex items-center justify-around mt-20 text-xl">
                <span className="border-2 border-black/50 px-4 py-2">ФИО пользователя</span>
                <span className="border-2 border-black/50 px-4 py-2">Роль пользователя</span>
                <span className="border-2 border-black/50 px-4 py-2">Дата регистрации</span>
            </div>
            <div className="bg-slate-50 mt-12 mx-12 px-8 py-6 rounded-md">
                <span className="text-2xl">Текущие курсы</span>
                <div className="grid"></div>
            </div>
        </div>
    );
};

export default Cabinet;