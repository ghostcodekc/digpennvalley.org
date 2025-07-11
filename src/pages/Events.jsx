import React, { useState, useEffect } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { EVENTS } from '../data/events';
import { Header } from '../components/Header';

export const Events = ({ isPreview = false }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // In a real Vite app, you would fetch from '/events.json'
    // For now, we use the imported dummy data.
    const dataToLoad = isPreview ? EVENTS.slice(0, 2) : EVENTS;
    setEvents(dataToLoad);
  }, [isPreview]);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div id="events" className="bg-gray-50 pb-10">
        <Header title="Upcoming Events" subtitle="Join us in the park! Here's what's happening."/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
            <div className="space-y-8">
                {events.slice(-5).reverse().map(event => (
                    <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="md:flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-secondary">{event.title}</h3>
                                <div className="flex items-center text-gray-500 mt-2 space-x-4 flex-wrap">
                                    <span className="flex items-center mb-2 md:mb-0"><Calendar className="mr-2 h-5 w-5"/> {formatDate(event.date)}</span>
                                    <span className="flex items-center"><MapPin className="mr-2 h-5 w-5"/> {event.location}</span>
                                </div>
                            </div>
                            <br></br>{event.event_link && (
                                <a
                                href={event.event_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 md:mt-0 bg-accent text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors shrink-0"
                                >
                                More Info
                                </a>
                            )}
                        </div>
                        <p className="text-gray-700 mt-4">{event.description}</p>
                    </div>
                ))}
            </div>
            {isPreview && (
                <div className="text-center mt-12">
                    <a href="#/events" className="text-emerald-600 font-semibold hover:text-emerald-800">
                        View All Events &rarr;
                    </a>
                </div>
            )}
        </div>
    </div>
  );
};