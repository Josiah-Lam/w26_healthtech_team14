import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection(): JSX.Element {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7">
          <div className="uppercase text-xs text-gray-600 mb-3">CENTRE FOR COMMUNITY, CLINICAL AND APPLIED RESEARCH EXCELLENCE</div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">Where healthcare connects research to outcomes</h1>
          <p className="text-lg text-gray-700 mb-6">Connect researchers, practitioners, and communities on one platform, where evidence-based goals align with action to drive innovation in healthcare and life sciences.</p>
          <div className="flex gap-3">
            <Link to="/get-started" className="bg-black text-white px-5 py-3 rounded-full shadow">Get started</Link>
            <Link to="/contact" className="border border-black text-black px-5 py-3 rounded-full">Contact us</Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative h-40 rounded overflow-hidden bg-gray-100">
              <img src="/hero-research.jpg" alt="Researchers" className="object-cover w-full h-full" loading="lazy" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">Submit research for ethics approval</span>
            </div>
            <div className="relative h-40 rounded overflow-hidden bg-gray-100">
              <img src="/hero-programs.jpg" alt="Programs" className="object-cover w-full h-full" loading="lazy" />
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">Drive community health breakthroughs</span>
            </div>
            <div className="relative col-span-2 h-44 rounded overflow-hidden bg-gray-100">
              <img src="/hero-community.jpg" alt="Community" className="object-cover w-full h-full" loading="lazy" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
