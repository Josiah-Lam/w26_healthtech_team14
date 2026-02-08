import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void; }): JSX.Element {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-50 bg-white">
          <div className="p-4">
            <button aria-label="Close menu" onClick={onClose} className="mb-4">Close</button>
            <nav>
              <ul className="flex flex-col gap-3">
                <li><Link to="/about" onClick={onClose}>About</Link></li>
                <li><Link to="/programs" onClick={onClose}>Programs</Link></li>
                <li><Link to="/research" onClick={onClose}>Research</Link></li>
                <li><Link to="/education" onClick={onClose}>Education</Link></li>
                <li><Link to="/events" onClick={onClose}>Events</Link></li>
                <li><Link to="/donate" onClick={onClose}>Donate</Link></li>
              </ul>
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
