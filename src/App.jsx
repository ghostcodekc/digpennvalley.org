import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Improvements } from './pages/Improvements';
import { Gallery } from './pages/Gallery';
import { Sponsors } from './pages/Sponsors';
import { Donate } from './pages/Donate';

const routes = {
    '#/': Home,
    '#/about': About,
    '#/events': Events,
    '#/improvements': Improvements,
    '#/gallery': Gallery,
    '#/sponsors': Sponsors,
    '#/donate': Donate,
};

export default function App() {
    const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentPath(window.location.hash || '#/');
            window.scrollTo(0, 0); // Scroll to top on page change
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const CurrentPage = routes[currentPath] || Home; // Fallback to Home for unknown routes

    return (
        <div className="bg-gray-100 min-h-screen font-sans flex flex-col">
            <Navbar currentPath={currentPath} />
            <main className="flex-grow bg-white">
                <CurrentPage />
            </main>
            <Footer />
        </div>
    );
}