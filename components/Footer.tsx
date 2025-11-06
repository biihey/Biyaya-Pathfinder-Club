
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, PathfinderLogo } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
               <PathfinderLogo className="h-10 w-10 text-pathfinder-yellow" />
               <span className="text-lg font-bold">Pathfinder Club</span>
            </div>
            <p className="text-sm text-slate-400">Adventuring with purpose since 1950.</p>
          </div>
          <div className="text-center">
            <h3 className="text-md font-semibold tracking-wider uppercase text-slate-300">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
                <li><a href="mailto:info@pathfinderclub.org" className="hover:text-pathfinder-yellow">info@pathfinderclub.org</a></li>
                <li><a href="tel:+1234567890" className="hover:text-pathfinder-yellow">(123) 456-7890</a></li>
                <li>Pasong Camachile II, Gen. Trias, Cavite, Philippines</li>
            </ul>
          </div>
          <div className="text-center md:text-right">
             <h3 className="text-md font-semibold tracking-wider uppercase text-slate-300">Follow Us</h3>
            <div className="flex justify-center md:justify-end mt-4 space-x-6">
              <a href="https://www.facebook.com/BiyayaPathfinderClub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pathfinder-yellow">
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pathfinder-yellow">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pathfinder-yellow">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Pathfinder Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
