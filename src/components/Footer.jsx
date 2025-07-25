import React from 'react';

export const Footer = () => (
    <footer className="bg-gray-100 text-gray-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-center space-x-6 md:order-2">
                    {/* Add social links here */}
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center text-base text-gray-600">
                        &copy; {new Date().getFullYear()} Dig Penn Valley. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);