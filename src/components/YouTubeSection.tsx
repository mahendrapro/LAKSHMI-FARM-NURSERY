import { getVideos } from '@/lib/content';

function extractVideoId(url: string): string | null {
  try {
    const u = new URL(url);
    // https://www.youtube.com/watch?v=VIDEO_ID
    if (u.searchParams.get('v')) return u.searchParams.get('v');
    // https://youtu.be/VIDEO_ID
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    // https://www.youtube.com/embed/VIDEO_ID
    if (u.pathname.startsWith('/embed/')) return u.pathname.split('/embed/')[1];
    return null;
  } catch {
    return null;
  }
}

export default function YouTubeSection() {
  const videos = getVideos();
  if (!videos.length) return null;

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="w-6 h-0.5 bg-brand-red" />
            <span className="text-brand-red text-xs font-body font-semibold uppercase tracking-[0.3em]">Watch Us</span>
            <div className="w-6 h-0.5 bg-brand-red" />
          </div>
          <h2 className="font-display font-black text-3xl md:text-5xl leading-tight text-white">
            Our Videos
          </h2>
          <p className="mt-3 font-body text-sm md:text-base text-white/50 max-w-xl">
            Training highlights, championships and demonstrations from Kadapa Tae Kwon Do Club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {videos.map((video, i) => {
            const videoId = extractVideoId(video.url);
            if (!videoId) return null;
            return (
              <div key={i} className="flex flex-col gap-3">
                <div className="relative w-full rounded-sm overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="text-white/70 text-sm font-body text-center leading-tight">{video.title}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@mattluruvijayabhaskarreddy9539"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-red-600 text-white font-body font-semibold uppercase tracking-widest text-xs px-8 py-4 transition-all"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            View All Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
