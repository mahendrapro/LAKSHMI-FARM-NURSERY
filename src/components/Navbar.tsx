'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Our Products' }, // changed
  { href: '/blog', label: 'Blog' }, // added
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

    measure();
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 500);

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
      {/* Removed belt stripe (taekwondo style) */}

      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <img
            src="/images/logo.png"
            alt="Lakshmi Farm Nursery"
            className="w-9 h-9 md:w-12 md:h-12 object-contain rounded-full border-2 border-green-600 group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="font-bold text-xs md:text-sm leading-tight text-green-800">
              LAKSHMI FARM NURSERY
            </div>
            <div className="text-[9px] md:text-[10px] text-green-600 tracking-widest uppercase font-semibold">
              Plants • Garden • Kadapa
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-xs uppercase tracking-widest font-semibold transition-all relative group text-gray-700 hover:text-green-600"
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all w-0 group-hover:w-full" />
              </Link>
            </li>
          ))}

          {/* WhatsApp Button */}
          <li>
            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20am%20interested%20in%20your%20plants"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-5 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-green-700 transition-colors rounded-sm"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-100 px-6 pb-6 flex flex-col gap-4 pt-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm uppercase tracking-widest font-semibold transition-colors text-gray-700 hover:text-green-600"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20am%20interested%20in%20your%20plants"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white text-center py-3 text-xs font-semibold uppercase tracking-widest rounded-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
