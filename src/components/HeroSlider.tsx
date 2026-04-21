'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import type { HeroSlide } from '@/lib/content';

const FALLBACKS = [
  'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1600&q=80',
];

function getImageSrc(image: string | undefined, index: number): string {
  if (!image || image.trim() === '') return FALLBACKS[index % FALLBACKS.length];
  return image;
}

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const validSlides = slides.filter(
    (s) => s.title && s.title.trim() !== ''
  );

  if (validSlides.length === 0) return null;

  return (
    <section className="relative overflow-hidden" style={{ height: 'calc(100svh - 0px)', minHeight: '500px' }}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full w-full hero-swiper"
      >
        {validSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full flex items-center">

              {/* Background */}
              <div className="absolute inset-0" style={{ backgroundColor: '#000' }}>
                <img
                  src={getImageSrc(slide.image, i)}
                  alt={slide.title}
                  className="w-full h-full"
                  onLoad={(e) => {
                    const img = e.target as HTMLImageElement;
                    const isPortrait = img.naturalHeight > img.naturalWidth * 1.1;
                    if (isPortrait) {
                      img.style.objectFit = 'contain';
                      img.style.objectPosition = 'center center';
                    } else {
                      img.style.objectFit = 'cover';
                      img.style.objectPosition = 'center 25%';
                    }
                  }}
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    const fallback = FALLBACKS[i % FALLBACKS.length];
                    if (img.src !== fallback) {
                      img.src = fallback;
                      img.style.objectFit = 'cover';
                      img.style.objectPosition = 'center 25%';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
              </div>

              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 md:w-1.5 bg-brand-red" />

              {/* Content */}
              <div className="relative z-10 w-full px-5 md:px-16 max-w-7xl mx-auto" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 md:w-10 h-0.5 bg-brand-red" />
                    <span className="text-brand-red text-[10px] md:text-xs font-body font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em]">
                      Kadapa Tae Kwon Do Club
                    </span>
                  </div>
                  <h1
                    className="font-display font-black text-white leading-[1.05] mb-3 md:mb-5"
                    style={{ fontSize: 'clamp(1.6rem, 6vw, 4.2rem)', textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}
                  >
                    {slide.title}
                  </h1>
                  {slide.subtitle && slide.subtitle.trim() !== '' && (
                    <p className="text-white/80 font-body text-sm md:text-lg leading-relaxed mb-5 md:mb-8 whitespace-pre-line">
                      {slide.subtitle}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={slide.button_link || 'https://wa.me/918522833600'}
                      target={slide.button_link?.startsWith('http') ? '_blank' : undefined}
                      rel={slide.button_link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-body font-semibold uppercase tracking-widest text-xs md:text-sm px-6 py-3 md:px-8 md:py-4 transition-all group"
                    >
                      {slide.button_text || 'Join Training'}
                      <svg className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <a
                      href="tel:+918522833600"
                      className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white/80 hover:text-white font-body font-medium uppercase tracking-widest text-xs md:text-sm px-6 py-3 md:px-8 md:py-4 transition-all"
                    >
                      📞 +91 85228 33600
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-10 left-0 right-0 z-10 px-5 md:px-16 hidden sm:block">
                <div className="flex flex-wrap gap-4 text-white/50 text-[10px] md:text-xs font-body uppercase tracking-widest">
                  <span>🏆 District Taekwondo Association</span>
                  <span>⬛ 4th Dan Black Belt Master</span>
                  <span>📅 Training Since 2010</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-px h-4 md:h-6 bg-white/40" />
        <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white" />
      </div>
    </section>
  );
}
