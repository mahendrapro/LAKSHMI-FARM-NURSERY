import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 — Brand + Social */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src="/images/logo.png" alt="Kadapa TKD" className="w-16 h-16 object-contain rounded-full border-2 border-brand-red" />
            <div>
              <div className="font-display font-bold text-sm text-white">KADAPA TAE KWON DO</div>
              <div className="text-[10px] text-brand-gold tracking-widest uppercase">Club · Est. 2010</div>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed font-body">
            Affiliated to District Taekwondo Association, YSR Kadapa District. Building champions since 2010.
          </p>
          <div className="mt-4 text-white/20 text-xs font-body tracking-widest">
            태권도 — The Way of Foot and Fist
          </div>

          {/* Social links */}
          <div className="mt-6">
            <div className="text-white/40 text-[10px] font-body uppercase tracking-widest mb-3">Follow Us</div>
            <div className="flex items-center gap-3">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@mattluruvijayabhaskarreddy9539"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-red-600 text-white/70 hover:text-white px-3 py-2 rounded-sm text-xs font-body transition-all"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="font-display font-bold text-white mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About & Master' },
              { href: '/events', label: 'Events' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/admin', label: 'Admin CMS' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-white/50 hover:text-brand-red text-sm font-body transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h4 className="font-display font-bold text-white mb-4 text-sm tracking-wide uppercase">Contact & Training</h4>
          <div className="space-y-3 text-sm font-body">
            <div className="flex gap-3">
              <span className="text-brand-red mt-0.5 shrink-0">📍</span>
              <span className="text-white/60">DSA Municipal Stadium, Kadapa, YSR Kadapa District, Andhra Pradesh</span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-red shrink-0">🕐</span>
              <span className="text-white/60">5:00 AM – 7:00 AM · Every Day</span>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-red shrink-0">📞</span>
              <a href="tel:+918522833600" className="text-white/60 hover:text-brand-red transition-colors">
                +91 85228 33600
              </a>
            </div>
            <a
              href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 text-xs uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-white/20 text-xs font-body">
        © {new Date().getFullYear()} Kadapa Tae Kwon Do Club · YSR Kadapa District · All rights reserved.
      </div>
    </footer>
  );
}
