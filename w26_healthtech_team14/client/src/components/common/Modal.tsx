import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ open, onClose, children, labelledBy }: { open: boolean; onClose: () => void; children: React.ReactNode; labelledBy?: string; }): JSX.Element {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={onClose} aria-hidden />
          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-white rounded-lg p-6 z-10 w-full max-w-lg" role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
            <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3">✕</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
