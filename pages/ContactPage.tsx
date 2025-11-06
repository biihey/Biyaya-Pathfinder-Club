
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../components/icons';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            We'd love to hear from you! Here's how you can reach us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-pathfinder-blue mb-6">Contact Information</h2>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-pathfinder-green mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>Pasong Camachile Seventh-Day Adventist Church, Pasong Camachille 2, Gen. Trias City, Cavite, Philippines</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-pathfinder-green mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:info@pathfinderclub.org" className="text-pathfinder-blue hover:underline">info@pathfinderclub.org</a>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="flex-shrink-0 h-6 w-6 text-pathfinder-green mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+1234567890" className="text-pathfinder-blue hover:underline">(123) 456-7890</a>
                </div>
              </div>
            </div>
             <div className="mt-8 pt-6 border-t">
                 <h3 className="text-lg font-semibold text-pathfinder-blue mb-4">Follow Us</h3>
                 <div className="flex space-x-4">
                     <a href="https://www.facebook.com/BiyayaPathfinderClub" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-pathfinder-blue"><span className="sr-only">Facebook</span><FacebookIcon className="h-8 w-8"/></a>
                     <a href="#" className="text-slate-500 hover:text-pathfinder-blue"><span className="sr-only">Instagram</span><InstagramIcon className="h-8 w-8"/></a>
                     <a href="#" className="text-slate-500 hover:text-pathfinder-blue"><span className="sr-only">Twitter</span><TwitterIcon className="h-8 w-8"/></a>
                 </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.592764188339!2d120.9405623758814!3d14.275330986196236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962d852108c4e5%3A0x63351235e130283c!2sPasong%20Camachile%20II%20Seventh-day%20Adventist%20Church!5e0!3m2!1sen!2sph!4v1720498656606!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                title="Club Location"
                className="min-h-[300px]"
              ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
