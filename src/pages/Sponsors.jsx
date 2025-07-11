import React from 'react';
import { SPONSORS } from '../data/sponsors';
import { Header } from '../components/Header';

export const Sponsors = ({ isPreview = false }) => (
    <div id="sponsors" className="bg-white">
        <Header title="Our Sponsors" subtitle="We are incredibly grateful for the support of these community partners."/>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {SPONSORS.map(sponsor => (
                    <div key={sponsor.id} className="p-4">
                        <img src={sponsor.logoUrl} alt={sponsor.name} className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"/>
                    </div>
                ))}
            </div>
             {isPreview && (
                <div className="text-center mt-12">
                    <a href="#/sponsors" className="text-emerald-600 font-semibold hover:text-emerald-800">
                        See All Our Sponsors &rarr;
                    </a>
                </div>
            )}
        </div>
    </div>
);