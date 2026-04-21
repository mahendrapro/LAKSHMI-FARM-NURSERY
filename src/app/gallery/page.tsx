import { getGallery } from '@/lib/content';
import GalleryGrid from '@/components/GalleryGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Kadapa Tae Kwon Do Club',
  description: 'Photo gallery of training, championships, and events.',
};

export default function GalleryPage() {
  const gallery = getGallery();

  return (
    <>
      {/* Hero header — pt-56 to clear announcement bars + navbar */}
      <section className="pt-56 pb-16 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-body font-semibold uppercase tracking-[0.3em]">Moments</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-tight mb-4">
            Photo <span className="text-brand-red">Gallery</span>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-xl">
            Training sessions, championships, belt ceremonies. Click any photo to view full size.
          </p>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-brand-red to-brand-blue" />

      <section className="py-16 px-4 md:px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-brand-muted font-body text-sm">
            {gallery.length} photos · Click to view full size
          </div>
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-light text-center">
        <div className="max-w-md mx-auto">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="font-display font-bold text-2xl text-brand-dark mb-3">Have Training Photos?</h2>
          <p className="text-brand-muted font-body text-sm mb-6">
            Send photos via WhatsApp and we will add them to our gallery.
          </p>
          <a
            href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20share%20photos"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-body font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-colors"
          >
            Send via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
