import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  return (
    <ul className="flex items-center gap-6 text-sm" role="menubar" aria-label="Main navigation">
      <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
      <li><Link to="/programs" className="hover:text-yellow-500">Programs</Link></li>
      <li><Link to="/research" className="hover:text-yellow-500">Research</Link></li>
      <li><Link to="/education" className="hover:text-yellow-500">Education</Link></li>
      <li><Link to="/events" className="hover:text-yellow-500">Events</Link></li>
      <li><Link to="/donate" className="text-yellow-500 font-semibold">Donate</Link></li>
    </ul>
  );
}
