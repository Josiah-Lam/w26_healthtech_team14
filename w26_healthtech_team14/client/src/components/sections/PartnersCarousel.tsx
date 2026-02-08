import React, { useRef } from 'react';

export default function PartnersCarousel(): JSX.Element {
  const trackRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex gap-8 animate-marquee will-change-transform">
        {['uw','hospital','healthorg','clinic','research'].map((k, i) => (
          <div key={i} className="flex items-center justify-center w-40 grayscale hover:grayscale-0 transition-colors">
            <img src={`/${k}-logo.png`} alt={`${k} logo`} className="max-h-12" loading="lazy" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
        .animate-marquee { display: inline-flex; gap: 2rem; animation: marquee 18s linear infinite; }
      `}</style>
    </div>
  );
}
