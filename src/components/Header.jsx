import React from 'react';

export const Header = ({ title, subtitle }) => (
    <div className="bg-slate-100 py-12 md:py-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">{title}</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);