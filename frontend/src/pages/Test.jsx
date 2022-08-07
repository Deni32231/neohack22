import React from 'react';

const Test = () => {
    return (
        <div className="mt-20 bg-slate-300 py-6 px-8 rounded-md shadow-lg">
            <h2 className="text-4xl text-center">Наименование теста</h2>
            <h3 className="text-2xl text-right">Наименование урока</h3>
            <h3 className="text-2xl text-right">Наименование курса</h3>
            <div className="bg-white/30 py-6 px-4 rounded-md shadow-lg mt-20">
                <form>
                    <div className="mt-6">
                        <span className="text-2xl">3 вопрос</span>
                        <p className="text-xl mt-4">(текст вопроса) (текст вопроса) (текст вопроса) (текст вопроса) (текст вопроса)</p>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                    </div>
                    <div className="mt-6">
                        <span className="text-2xl">3 вопрос</span>
                        <p className="text-xl mt-4">(текст вопроса) (текст вопроса) (текст вопроса) (текст вопроса) (текст вопроса)</p>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                    </div><div className="mt-6">
                        <span className="text-2xl">3 вопрос</span>
                        <p className="text-xl mt-4">(текст вопроса) (текст вопроса) (текст вопроса) (текст вопроса) (текст вопроса)</p>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                        <label className="mr-6 cursor-pointer">
                            <input className="mr-5 cursor-pointer" type="radio" />
                            text otveta
                        </label>
                    </div>
                    <button className="px-6 py-2 text-xl border-2 border-cyan-500/50 mx-auto block mt-10">Завершить тест</button>
                </form>
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

export default Test;