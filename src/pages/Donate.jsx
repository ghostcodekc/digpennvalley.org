import React from 'react';
import { Heart, ShoppingCart  } from 'lucide-react';

export const Donate = () => (
    <div id="donate" className="bg-slate-100">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-600 sm:text-4xl">
                <span className="block">Help Us Grow.</span>
                <span className="block text-primary">Support Dogpark Improvement Group (DIG) Today</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-600">
                Every contribution, big or small, helps us fund vital projects and community events.
            </p>
            <a href="http://paypal.me/digPV" className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-secondary bg-white hover:bg-emerald-50 sm:w-auto">
                <Heart className="mr-3 h-6 w-6"/>
                Donate Now
            </a>
        </div>
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-600 sm:text-4xl">
                <span className="block">Check Out Our Shop!</span>
            </h2>
            <a href="http://digpennvalley.square.site/" className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-secondary bg-white hover:bg-emerald-50 sm:w-auto">
                <ShoppingCart  className="mr-3 h-6 w-6"/>
                Shop Now
            </a>
        </div>
    </div>
);