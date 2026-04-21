'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FALLBACKS = [
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
  'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=800&q=80',
];

function formatDate(ds: string) {
  const d = new Date(ds);
  return {
    full:  d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
    day:   d.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: d.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase(),
  };
}

interface Props {
  title: string; date: string; description: string;
  images: string[]; isUpcoming: boolean;
}

export default function EventCard({ title, date, description, images, isUpcoming }: Props) {
  const { full, day, month } = formatDate(date);
  const photos = images.length ? images : [FALLBACKS[0]];

  return (
    <article className="card-pro overflow-hidden rounded-sm group">
      {/* Mini photo slideshow */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        {photos.length === 1 ? (
          <img src={photos[0]} alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { (e.target as HTMLImageElement).src = FALLBACKS[0]; }} />
        ) : (
          <Swiper modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }} loop
            className="h-full w-full event-mini-swiper">
            {photos.map((p, i) => (
              <SwiperSlide key={i}>
                <img src={p} alt={`${title} ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = FALLBACKS[i % FALLBACKS.length]; }} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Date badge */}
        <div className="absolute top-3 left-3 z-10 bg-brand-red text-white text-center px-3 py-2 min-w-[52px]">
          <div className="font-display font-black text-2xl leading-none">{day}</div>
          <div className="text-[10px] uppercase tracking-widest mt-0.5 font-body">{month}</div>
        </div>

        {/* Status */}
        <div className={`absolute top-3 right-3 z-10 px-2 py-1 text-[10px] font-body font-semibold uppercase tracking-wider ${
          isUpcoming ? 'bg-green-600 text-white' : 'bg-gray-800/70 text-white/70'
        }`}>
          {isUpcoming ? '● Upcoming' : 'Completed'}
        </div>

        {/* Photo count */}
        {photos.length > 1 && (
          <div className="absolute bottom-2 right-2 z-10 bg-black/50 text-white text-[10px] font-body px-2 py-0.5 flex items-center gap-1">
            📷 {photos.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-brand-dark text-lg leading-tight mb-2 group-hover:text-brand-red transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-brand-muted text-sm font-body leading-relaxed mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-2 text-brand-muted text-xs font-body">
            <span>📅</span><span>{full}</span>
          </div>
          {isUpcoming && (
            <a href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20register%20for%20the%20event"
              target="_blank" rel="noopener noreferrer"
              className="text-brand-red hover:text-red-700 text-xs font-body font-semibold uppercase tracking-wider transition-colors">
              Register ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
