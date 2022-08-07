import React from 'react';
import SearchCheckbox from '../components/SearchCheckbox';
import Tags from '../components/Tags';

const Main = () => {

    return (
        <div className="container mx-auto mt-20">
            <div>
                <form>
                    <input type="text" className="w-full p-2 mt-16 border-black/50 border-2" placeholder='Поиск по названию'/>
                    <div className="mt-7">
                        <Tags></Tags>
                        <SearchCheckbox value={'Java'}/>
                        <SearchCheckbox value={'C++'}/>
                        <SearchCheckbox value={'JavaScript'}/>
                        <SearchCheckbox value={'Python'}/>
                        <SearchCheckbox value={'Go'}/>
                    </div>
                    <button className="block ml-auto px-6 py-2 text-xl border-2 border-yellow-400 mr-6 posi mt-2 rounded-md">Искать</button>
                </form>
            </div>
            <div className="mt-20 text-center">
                <a href="/front/course/5" className="text-2xl">Направление программы 1</a>
            </div>
        </div>
    );
};

export default Main;