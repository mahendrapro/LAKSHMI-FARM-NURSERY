'use client';
import { useEffect, useState } from 'react';

export default function HeroOffsetWrapper({ children }: { children: React.ReactNode }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const measure = () => {
      const bar = document.querySelector('[data-announcement-bar="true"]') as HTMLElement | null;
      const nav = document.querySelector('header') as HTMLElement | null;
      setOffset((bar?.offsetHeight ?? 0) + (nav?.offsetHeight ?? 0));
    };
    measure();
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener('resize', measure); };
  }, []);

  return (
    <div style={{ marginTop: `${offset}px` }}>
      {children}
    </div>
  );
}
