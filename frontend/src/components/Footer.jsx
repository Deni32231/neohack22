import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-black/75">
            <div className="container mx-auto py-6">

                <Link to="/front/" className="flex items-center"><img className='w-12 m-0' src="/img/logo.svg" alt="logo" /><span className="ml-5 text-2xl text-slate-50">Образовательная платформа</span></Link>

            </div>
        </div>
    );
};

export default Footer;