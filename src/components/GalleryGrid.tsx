'use client';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { GalleryItem } from '@/lib/content';

const FALLBACKS = [
  'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
];

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen]   = useState(false);
  const [index, setIndex] = useState(0);
  const gallery = items.length ? items : FALLBACKS.map((image, i) => ({ image, caption: `Photo ${i + 1}` }));
  const slides  = gallery.map((g) => ({ src: g.image, alt: g.caption }));

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
        {gallery.map((item, i) => (
          <button key={i} onClick={() => { setIndex(i); setOpen(true); }}
            className="group relative aspect-square overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img
              src={item.image} alt={item.caption || `Photo ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={(e) => { (e.target as HTMLImageElement).src = FALLBACKS[i % FALLBACKS.length]; }}
            />
            <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/15 transition-all duration-300 flex items-center justify-center">
              <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-body truncate">{item.caption}</p>
              </div>
            )}
          </button>
        ))}
      </div>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,0.97)' } }} />
    </>
  );
}
