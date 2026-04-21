import { getHeroSlides, getEvents, getGallery, getEventPhotos } from '@/lib/content';
import HeroSlider from '@/components/HeroSlider';
import EventCard from '@/components/EventCard';
import GalleryGrid from '@/components/GalleryGrid';
import SectionHeading from '@/components/SectionHeading';
import BeltSection from '@/components/BeltSection';
import YouTubeSection from '@/components/YouTubeSection';
import TaekwondoMeaning from '@/components/TaekwondoMeaning';
import HeroOffsetWrapper from '@/components/HeroOffsetWrapper';
import Link from 'next/link';

export default function HomePage() {
  const slides  = getHeroSlides();
  const events  = getEvents();
  const gallery = getGallery();

  return (
    <>
      {/* ── Hero — pushed below announcement bars + navbar ── */}
      <HeroOffsetWrapper>
        <HeroSlider slides={slides} />
      </HeroOffsetWrapper>

      {/* ── Stats bar ────────────────────────── */}
      <div className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { num: '40+',  label: 'Years of Excellence' },
            { num: '2010', label: 'Founded' },
            { num: '4th',  label: 'Dan Black Belt Master' },
            { num: '100+', label: 'Champions Trained' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display font-black text-2xl md:text-3xl text-white">{num}</div>
              <div className="text-white/70 text-xs uppercase tracking-wider mt-1 font-body">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── About teaser ─────────────────────── */}
      <section className="py-24 px-6 bg-brand-light section-watermark">
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="About the Club"
              title="Discipline. Honour. Championship."
              subtitle="Kadapa Tae Kwon Do Club has been building champions for over three decades, affiliated to the District Taekwondo Association, YSR Kadapa District."
              align="left"
            />
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: '🥋', text: 'All age groups welcome' },
                { icon: '🏟️', text: 'DSA Municipal Stadium' },
                { icon: '🌅', text: '5 AM – 7 AM daily' },
                { icon: '🏅', text: 'National-level coach' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-brand-muted text-sm font-body bg-white rounded-sm px-4 py-3 border border-gray-100 shadow-sm">
                  <span className="text-xl">{icon}</span>{text}
                </div>
              ))}
            </div>
            <Link href="/about"
              className="inline-flex items-center gap-3 bg-brand-red text-white font-body font-semibold uppercase tracking-widest text-xs px-8 py-4 hover:bg-red-700 transition-colors">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="card-pro p-8 rounded-sm relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-full bg-brand-red/10 border-2 border-brand-red flex items-center justify-center mb-5 text-3xl">🥋</div>
              <div className="text-brand-gold text-xs font-body font-semibold uppercase tracking-[0.3em] mb-1">Head Master</div>
              <h3 className="font-display font-bold text-2xl text-brand-dark mb-1">Master Vijay Bhaskar Reddy</h3>
              <div className="text-brand-red text-sm font-body mb-5">Chairman – District Taekwondo Association</div>
              <div className="space-y-2 border-t border-gray-100 pt-4">
                {[
                  'Black Belt 4th Dan (WT)',
                  'National Master & Instructor License',
                  'National Referee',
                  'National Gold Medalist',
                  'Experience since 1985 (40+ years)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-brand-muted text-sm font-body">
                    <span className="text-brand-red shrink-0">▸</span>{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What does Taekwondo mean ──────────── */}
      <TaekwondoMeaning />

      {/* ── Events ───────────────────────────── */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeading eyebrow="Upcoming Events" title="Championships & Gradings" align="left" />
            <Link href="/events" className="text-brand-red hover:text-red-700 font-body text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors">
              View All Events →
            </Link>
          </div>
          {events.length === 0 ? (
            <p className="text-brand-muted font-body text-center py-10">No events yet — add via Admin panel.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.slice(0, 3).map((event, i) => (
                <EventCard key={i} title={event.title} date={event.date}
                  description={event.description} images={getEventPhotos(event)}
                  isUpcoming={new Date(event.date) >= new Date()} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Belt journey ─────────────────────── */}
      <BeltSection />

      {/* ── YouTube Videos ───────────────────── */}
      <YouTubeSection />

      {/* ── Gallery preview ───────────────────── */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <SectionHeading eyebrow="Gallery" title="Moments of Glory" align="left" />
            <Link href="/gallery" className="text-brand-red hover:text-red-700 font-body text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors">
              View Full Gallery →
            </Link>
          </div>
          <GalleryGrid items={gallery.slice(0, 8)} />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-5 leading-tight">
            Ready to Begin Your Taekwondo Journey?
          </h2>
          <p className="text-white/60 font-body text-lg mb-10">
            Join Kadapa's most respected Taekwondo club. Train under a National Master and build a champion's mindset.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training"
              target="_blank" rel="noopener noreferrer"
              className="bg-brand-red hover:bg-red-700 text-white font-body font-bold uppercase tracking-widest text-sm px-10 py-5 transition-colors">
              WhatsApp to Enroll
            </a>
            <a href="tel:+918522833600"
              className="border-2 border-white/30 hover:border-white text-white font-body font-semibold uppercase tracking-widest text-sm px-10 py-5 transition-colors">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
