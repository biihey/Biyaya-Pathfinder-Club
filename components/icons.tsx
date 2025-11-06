import React from 'react';

export const PathfinderLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 105" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g>
      {/* Outer red triangle */}
      <path d="M50 105 L0 0 H100 Z" fill="#ed1c24"/>
      {/* Yellow border */}
      <path d="M50 100 L5 5 H95 Z" fill="#f7ea00"/>
      {/* Inner red triangle */}
      <path d="M50 97.5 L7.5 7.5 H92.5 Z" fill="#ed1c24"/>
      
      {/* Top Banner Box */}
      <rect x="7.5" y="7.5" width="85" height="17.5" fill="#ed1c24"/>
      <rect x="10" y="9" width="80" height="14.5" fill="#f7ea00"/>
      <rect x="11" y="10" width="78" height="12.5" fill="#ed1c24"/>
      <text x="50" y="20.5" fontFamily="sans-serif" fontWeight="900" fontSize="10" fill="#f7ea00" textAnchor="middle" letterSpacing="0.5">
        PATHFINDER
      </text>

      {/* Shield */}
      <path d="M50 78 C75 60 82.5 35 82.5 35 L50 27.5 L17.5 35 C17.5 35 25 60 50 78 Z" fill="#ed1c24"/>
      <path d="M50 75.5 C72.5 58.5 79 36 79 36 L50 30 L21 36 C21 36 27.5 58.5 50 75.5 Z" fill="#f7ea00"/>
      <path d="M50 73 C70 57 75.5 37 75.5 37 L50 32.5 L24.5 37 C24.5 37 30 57 50 73 Z" fill="#ffffff"/>

      {/* Sword */}
      <g transform="rotate(-35 50 55)" stroke="#0072bc">
        <line x1="50" y1="25" x2="50" y2="85" strokeWidth="5" />
        <line x1="40" y1="70" x2="60" y2="70" strokeWidth="5" strokeLinecap="round" />
        <circle cx="50" cy="90" r="4" fill="#0072bc" stroke="none" />
      </g>
      
      {/* "CLUB" text */}
      <text x="77.5" y="87.5" fontFamily="sans-serif" fontWeight="900" fontSize="11" fill="#f7ea00" textAnchor="middle">
        CLUB
      </text>
    </g>
  </svg>
);


export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.483.011-4.69.068-2.61.12-3.693 1.203-3.812 3.812-.057 1.207-.068 1.574-.068 4.69s.011 3.483.068 4.69c.12 2.61 1.203 3.693 3.812 3.812 1.207.057 1.574.068 4.69.068s3.483-.011 4.69-.068c2.61-.12 3.693-1.203 3.812-3.812.057-1.207.068-1.574.068-4.69s-.011-3.483-.068-4.69c-.12-2.61-1.203-3.693-3.812-3.812-1.207-.057-1.574-.068-4.69-.068zm0 3.39c-2.401 0-4.35 1.95-4.35 4.35s1.95 4.35 4.35 4.35 4.35-1.95 4.35-4.35-1.949-4.35-4.35-4.35zm0 7.29c-1.624 0-2.94-1.316-2.94-2.94s1.316-2.94 2.94-2.94 2.94 1.316 2.94 2.94-1.316 2.94-2.94 2.94zm4.965-7.98c-.62 0-1.125.505-1.125 1.125s.505 1.125 1.125 1.125 1.125-.505 1.125-1.125-.505-1.125-1.125-1.125z" />
  </svg>
);

export const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.223.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M-4.5 12h22.5" />
  </svg>
);

export const PinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const DocumentDownloadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);