import React from 'react';

const categories = [
  {
    title: 'Junior Grades',
    belts: [
      { label: '10th KUP', bg: '#FFFFFF', border: true, stripe: null, stripes: 0 },
      { label: '9th Kup',  bg: '#FFFF00', stripe: '#FFFFFF', stripes: 0 },
      { label: '8th Kup',  bg: '#FFFF00', stripe: null, stripes: 0 },
      { label: '7th Kup',  bg: '#FFFF00', stripe: '#008000', stripes: 0 },
    ],
  },
  {
    title: 'Intermediate',
    belts: [
      { label: '6th Kup', bg: '#008000', stripe: null, stripes: 0 },
      { label: '5th Kup', bg: '#008000', stripe: '#0000FF', stripes: 0 },
      { label: '4th Kup', bg: '#0000FF', stripe: null, stripes: 0 },
    ],
  },
  {
    title: 'Advanced',
    belts: [
      { label: '3rd Kup', bg: '#0000FF', stripe: '#FF0000', stripes: 0 },
      { label: '2nd Kup', bg: '#FF0000', stripe: null, stripes: 0 },
      { label: '1st Kup', bg: '#FF0000', stripe: '#000000', stripes: 0 },
    ],
  },
  {
    title: 'Black Belts',
    belts: [
      { label: '1st Dan',        bg: '#111111', border: true, stripe: null, stripes: 1 },
      { label: '2nd Dan',        bg: '#111111', border: true, stripe: null, stripes: 2 },
      { label: '3rd Dan',        bg: '#111111', border: true, stripe: null, stripes: 3 },
      { label: '4th Dan',        bg: '#111111', border: true, stripe: null, stripes: 4 },
      { label: '5th Dan Master', bg: '#111111', border: true, stripe: null, stripes: 5 },
    ],
  },
];

export default function BeltSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-brand-light section-watermark">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-body font-semibold uppercase tracking-[0.3em]">The Journey</span>
            <div className="w-6 h-0.5 bg-brand-red" />
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl leading-tight text-brand-dark">
            White Belt to Black Belt
          </h2>
          <p className="mt-3 font-body leading-relaxed max-w-2xl text-sm md:text-base text-brand-muted">
            Every colour is a milestone. Every grade is earned. Join the journey.
          </p>
        </div>

        {/* 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-display font-bold text-brand-dark text-[10px] md:text-xs uppercase tracking-widest mb-4 text-center pb-2 border-b border-brand-red/30">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-3 md:gap-4">
                {cat.belts.map(({ label, bg, border, stripe, stripes }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`relative overflow-hidden w-full shadow-md ${border ? 'border border-gray-500' : ''}`}
                      style={{ backgroundColor: bg, height: '28px', borderRadius: '3px' }}
                    >
                      {stripe && (
                        <div className="absolute left-0 right-0" style={{ top: '30%', bottom: '30%', backgroundColor: stripe }} />
                      )}
                      {stripes > 0 && (
                        <div className="absolute top-0 bottom-0 right-0 flex items-center" style={{ gap: '3px', paddingRight: '5px', paddingLeft: '5px' }}>
                          {Array.from({ length: stripes }).map((_, i) => (
                            <div key={i} style={{ width: '4px', height: '100%', backgroundColor: '#FFD700' }} />
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-brand-muted text-[9px] md:text-[10px] font-body uppercase tracking-wider text-center leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-red hover:bg-red-700 text-white font-body font-semibold uppercase tracking-widest text-xs md:text-sm px-8 md:px-10 py-4 md:py-5 transition-colors"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
