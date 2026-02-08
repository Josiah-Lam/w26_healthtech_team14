import { useEffect, useState } from 'react';

export default function useScrollPosition(): number {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    function onScroll() { setPos(window.scrollY); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return pos;
}
