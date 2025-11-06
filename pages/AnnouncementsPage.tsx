
import React from 'react';
import { announcements } from '../constants';
import { CalendarIcon, PinIcon } from '../components/icons';

const AnnouncementsPage: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Announcements & News
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            Stay up to date with our latest events and updates.
          </p>
        </div>
        
        <div className="space-y-8">
          {announcements.map((item, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-pathfinder-yellow">
              <h2 className="text-2xl font-bold text-pathfinder-blue mb-2">{item.title}</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-slate-500 mb-4">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-pathfinder-green" />
                  <span className="font-semibold">{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PinIcon className="h-5 w-5 text-pathfinder-red" />
                  <span className="font-semibold">{item.location}</span>
                </div>
              </div>
              <p className="text-slate-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
