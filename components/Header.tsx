
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { PathfinderLogo, MenuIcon, XIcon } from './icons';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Announcements', href: '/announcements' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Resources', href: '/resources' },
  { name: 'Register', href: '/register' },
  { name: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkClass = 'bg-pathfinder-yellow text-pathfinder-blue';
  const inactiveLinkClass = 'text-white hover:bg-pathfinder-blue/80 hover:text-white';
  const linkClasses = 'px-3 py-2 rounded-md text-sm font-bold transition-colors';

  return (
    <header className="bg-pathfinder-blue shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <PathfinderLogo className="h-12 w-12 text-pathfinder-yellow" />
              <span className="text-white text-xl font-black tracking-wider">PATHFINDERS</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `${linkClasses} ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                  end={item.href === '/'}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-pathfinder-blue/50 inline-flex items-center justify-center p-2 rounded-md text-pathfinder-yellow hover:text-white hover:bg-pathfinder-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-pathfinder-blue focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
                end={item.href === '/'}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
