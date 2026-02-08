import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import LoginModal from '../auth/LoginModal';

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" aria-label="CCCARE home" className="flex items-center gap-3">
            <img src="/uw-logo.svg" alt="University of Waterloo" className="h-8 w-auto" />
            <div>
              <div className="text-sm font-bold">CCCARE</div>
              <div className="text-xs text-gray-600">Centre for Community, Clinical and Applied Research Excellence</div>
            </div>
          </Link>
        </div>

        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <Navigation />
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <input aria-label="Search site" className="border rounded px-3 py-2 text-sm" placeholder="Search" />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm" onClick={() => setLoginOpen(true)}>Login</button>
          <button className="lg:hidden" aria-label="Open menu" onClick={() => setOpen(true)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
