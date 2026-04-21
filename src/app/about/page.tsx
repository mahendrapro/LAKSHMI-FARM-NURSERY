import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'About | Kadapa Tae Kwon Do Club',
  description: 'About Kadapa Tae Kwon Do Club and Master Vijay Bhaskar Reddy.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-16 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-body font-semibold uppercase tracking-[0.3em]">Our Story</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-tight mb-4">
            About the <span className="text-brand-red">Club</span>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-xl">
            Affiliated to District Taekwondo Association, YSR Kadapa District — shaping champions since 2010.
          </p>
        </div>
      </section>
      <div className="h-1 bg-gradient-to-r from-brand-red to-brand-blue" />

      {/* Club History */}
      <section className="py-24 px-6 bg-brand-light section-watermark">
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading eyebrow="Established 2010" title="A Legacy of Discipline" align="left" />
            <div className="space-y-4 text-brand-muted font-body leading-relaxed">
              <p>Kadapa Tae Kwon Do Club was established in <strong className="text-brand-dark">2010</strong> with a mission to bring world-class Taekwondo training to YSR Kadapa District. The club is officially affiliated to the <strong className="text-brand-dark">District Taekwondo Association, YSR Kadapa District</strong>.</p>
              <p>Under <strong className="text-brand-dark">Master Vijay Bhaskar Reddy</strong>, the club has produced district, state, and national-level champions across all age groups.</p>
              <p>Our philosophy is rooted in the five tenets: <em className="text-brand-red font-semibold">courtesy, integrity, perseverance, self-control, and indomitable spirit</em>.</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="pl-6 border-l-2 border-brand-red/20 space-y-7">
            {[
              { year: '1985', event: 'Master Vijay begins his Taekwondo journey' },
              { year: '1992', event: 'Coaching career begins' },
              { year: '2010', event: 'Kadapa Tae Kwon Do Club officially established' },
              { year: '2012', event: 'First batch participates in District Championships' },
              { year: '2015', event: 'Master attains 4th Dan Black Belt certification' },
              { year: '2018', event: 'National Referee licence awarded' },
              { year: '2020', event: 'Club affiliated to District Taekwondo Association' },
              { year: '2024', event: '100+ champions trained and counting' },
            ].map(({ year, event }) => (
              <div key={year} className="relative">
                <div className="absolute -left-[29px] w-3.5 h-3.5 rounded-full border-2 border-brand-red bg-white" />
                <div className="text-brand-red font-display font-bold text-sm mb-0.5">{year}</div>
                <div className="text-brand-muted font-body text-sm">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master */}
      <section className="py-24 px-6 bg-brand-gray" id="master">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="Head Master" title="Master Vijay Bhaskar Reddy"
            subtitle="A decorated national athlete and certified instructor with over 40 years of dedication to Taekwondo." />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile card */}
            <div className="card-pro p-8 flex flex-col items-center text-center rounded-sm relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-28 h-28 rounded-full bg-brand-red/10 border-4 border-brand-red flex items-center justify-center text-5xl mb-5">🥋</div>
                <h3 className="font-display font-bold text-brand-dark text-xl mb-1">Master Vijay Bhaskar Reddy</h3>
                <div className="text-brand-red text-sm font-body font-semibold mb-1">Chairman</div>
                <div className="text-brand-muted text-xs font-body uppercase tracking-widest">District Taekwondo Association</div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-brand-muted text-xs font-body">
                  Journey began in <span className="text-brand-red font-display font-black text-xl block mt-1">1985</span>
                </div>
                <div className="mt-2 text-brand-muted text-xs font-body">
                  Coaching since <span className="text-brand-red font-display font-black text-xl block mt-1">1992</span>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '⬛', title: 'Black Belt 4th Dan (WT)', desc: 'World Taekwondo certified — one of the highest ranks in the discipline.' },
                { icon: '📜', title: 'National Master & Instructor', desc: 'Holds National Master and Instructor Licence, authorised to train and grade students.' },
                { icon: '🚩', title: 'National Referee', desc: 'Certified National Referee, officiating at state and national competitions.' },
                { icon: '🥇', title: 'National Gold Medalist', desc: 'Competed and won at the highest level — a national gold medallist.' },
                { icon: '⏳', title: '40+ Years Experience', desc: 'Training and teaching Taekwondo continuously since 1985.' },
                { icon: '🏆', title: 'District Association Chairman', desc: 'Currently serving as Chairman, District Taekwondo Association, YSR Kadapa.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="card-pro p-5 rounded-sm group">
                  <div className="text-2xl mb-2">{icon}</div>
                  <h4 className="font-display font-bold text-brand-dark text-sm mb-1 group-hover:text-brand-red transition-colors">{title}</h4>
                  <p className="text-brand-muted text-xs font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section className="py-24 px-6 bg-brand-light section-watermark" id="classes">
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading eyebrow="Training Programme" title="Class Schedule & Venue"
            subtitle="Daily morning sessions for all ages and experience levels." />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: '📍', title: 'Venue', lines: ['DSA Municipal Stadium', 'Kadapa, YSR Kadapa District', 'Andhra Pradesh'] },
              { icon: '🕐', title: 'Timing', lines: ['5:00 AM – 7:00 AM', 'Every Day including weekends', 'Rain or shine'] },
              { icon: '👥', title: 'Who Can Join', lines: ['Children (6 years and above)', 'Teenagers & Adults', 'All belt levels welcome'] },
            ].map(({ icon, title, lines }) => (
              <div key={title} className="card-pro p-8 text-center rounded-sm">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-display font-bold text-brand-dark text-lg mb-4">{title}</h3>
                {lines.map((l) => <p key={l} className="text-brand-muted font-body text-sm leading-relaxed">{l}</p>)}
              </div>
            ))}
          </div>
          <div className="bg-brand-red/5 border border-brand-red/20 p-8 text-center rounded-sm">
            <p className="text-brand-muted font-body mb-6">Contact Master Vijay Bhaskar Reddy to get started with your first free session.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training"
                target="_blank" rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-white font-body font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-colors">
                WhatsApp: +91 85228 33600
              </a>
              <a href="tel:+918522833600"
                className="bg-brand-red hover:bg-red-700 text-white font-body font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-colors">
                Call: +91 85228 33600
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Five Tenets */}
      <section className="py-24 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          <SectionHeading eyebrow="The Philosophy" title="Five Tenets of Taekwondo" />
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { korean: '예의', english: 'Courtesy' },
              { korean: '염치', english: 'Integrity' },
              { korean: '인내', english: 'Perseverance' },
              { korean: '극기', english: 'Self-Control' },
              { korean: '백절불굴', english: 'Indomitable Spirit' },
            ].map(({ korean, english }) => (
              <div key={english} className="card-pro p-8 flex flex-col items-center min-w-[150px] rounded-sm group">
                <div className="text-3xl text-brand-red mb-3 group-hover:scale-110 transition-transform font-bold">{korean}</div>
                <div className="font-display font-bold text-brand-dark text-sm">{english}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
