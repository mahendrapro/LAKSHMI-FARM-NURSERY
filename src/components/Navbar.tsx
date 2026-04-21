'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
];

export default function Navbar({ hasAnnouncements }: { hasAnnouncements: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const measure = () => {
      const bar = document.querySelector('[data-announcement-bar]') as HTMLElement | null;
      setTopOffset(bar ? bar.offsetHeight : 0);
    };

    // Measure immediately, then again after a short delay for render to settle
    measure();
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);

    // Re-measure on resize
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', measure);
    };
  }, [hasAnnouncements]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/90 backdrop-blur-sm shadow-sm shadow-black/5'
      }`}
      style={{ top: `${topOffset}px` }}
    >
      <div className="belt-stripe w-full" />
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <img
            src="/images/logo.png"
            alt="Kadapa TKD"
            className="w-9 h-9 md:w-12 md:h-12 object-contain rounded-full border-2 border-brand-red group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="font-display font-bold text-xs md:text-sm leading-tight text-brand-dark">
              KADAPA TAE KWON DO
            </div>
            <div className="text-[9px] md:text-[10px] text-brand-red tracking-widest uppercase font-body font-semibold">
              Club · Est. 2010 · YSR Kadapa
            </div>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="font-body text-xs uppercase tracking-widest font-semibold transition-all relative group text-brand-dark/70 hover:text-brand-red">
                {label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-brand-red transition-all w-0 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training"
              target="_blank" rel="noopener noreferrer"
              className="bg-brand-red text-white px-5 py-2 text-xs font-body font-semibold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-sm"
            >
              Join Now
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-brand-dark transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-dark transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brand-dark transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 pb-6 flex flex-col gap-4 pt-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}
              className="text-sm uppercase tracking-widest font-semibold font-body transition-colors text-brand-dark/70 hover:text-brand-red"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training"
            target="_blank" rel="noopener noreferrer"
            className="bg-brand-red text-white text-center py-3 text-xs font-semibold uppercase tracking-widest rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
}
