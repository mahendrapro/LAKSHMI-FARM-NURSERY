import { getEvents, getEventPhotos } from '@/lib/content';
import EventCard from '@/components/EventCard';

export const metadata = {
  title: 'Events | Kadapa Tae Kwon Do Club',
  description: 'Upcoming championships, belt gradings, and events.',
};

export default function EventsPage() {
  const events = getEvents();
  return (
    <>
      <section className="pt-40 pb-16 px-6 bg-brand-dark relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-red" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-body font-semibold uppercase tracking-[0.3em]">Calendar</span>
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl text-white leading-tight mb-4">
            Events & <span className="text-brand-red">Championships</span>
          </h1>
          <p className="text-white/50 font-body text-lg max-w-xl">
            Each event card shows a mini photo slideshow. Add multiple photos via Admin.
          </p>
        </div>
      </section>
      <div className="h-1 bg-gradient-to-r from-brand-red to-brand-blue" />

      <section className="py-20 px-6 bg-brand-gray">
        <div className="max-w-7xl mx-auto">
          {events.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">📅</div>
              <p className="text-brand-muted font-body">No events yet. Add events via the Admin panel.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <EventCard key={i} title={event.title} date={event.date}
                  description={event.description} images={getEventPhotos(event)}
                  isUpcoming={new Date(event.date) >= new Date()} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-6 bg-brand-light text-center">
        <h2 className="font-display font-bold text-3xl text-brand-dark mb-4">Want to Participate?</h2>
        <p className="text-brand-muted font-body mb-8 max-w-md mx-auto">
          Contact Master Vijay Bhaskar Reddy to register for upcoming events.
        </p>
        <a href="https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20register%20for%20an%20event"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-body font-semibold uppercase tracking-widest text-sm px-10 py-5 transition-colors">
          WhatsApp to Register
        </a>
      </section>
    </>
  );
}
