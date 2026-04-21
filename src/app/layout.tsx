import type { Metadata } from 'next';
import { Playfair_Display, Barlow } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnnouncementBar from '@/components/AnnouncementBar';
import { getAnnouncements } from '@/lib/content';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-display', 
  weight: ['400','700','900'] 
});

const barlow = Barlow({ 
  subsets: ['latin'], 
  variable: '--font-body', 
  weight: ['300','400','500','600','700'] 
});

export const metadata: Metadata = {
  title: 'Taekwondo & Karate Classes Kadapa | Kadapa Tae Kwon Do Club',
  description: 'Best Taekwondo and Karate training in Kadapa, Andhra Pradesh. Learn from Master Vijay Bhaskar Reddy — 4th Dan Black Belt, National Gold Medalist. Daily classes 5AM-7AM at DSA Municipal Stadium, YSR Kadapa District.',
  keywords: 'Taekwondo Kadapa, Karate classes Kadapa, martial arts Kadapa, self defense Kadapa, kids karate Kadapa, kids taekwondo Kadapa, YSR Kadapa martial arts, karate near me Kadapa, taekwondo near me Kadapa, best martial arts Kadapa',
  openGraph: {
    title: 'Taekwondo & Karate Classes Kadapa | Kadapa Tae Kwon Do Club',
    description: 'Best Taekwondo and Karate training in Kadapa under Master Vijay Bhaskar Reddy — National Gold Medalist, 4th Dan Black Belt.',
    url: 'https://kadapa-tkd.vercel.app',
    siteName: 'Kadapa Tae Kwon Do Club',
    images: [{ url: '/images/logo.png', width: 800, height: 800, alt: 'Kadapa Tae Kwon Do Club' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taekwondo & Karate Classes Kadapa',
    description: 'Best martial arts training in YSR Kadapa District since 2010.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  'name': 'Kadapa Tae Kwon Do Club',
  'alternateName': ['Kadapa Karate Club', 'Kadapa TKD', 'Kadapa Martial Arts'],
  'description': 'Taekwondo and Karate training in YSR Kadapa District since 2010 under Master Vijay Bhaskar Reddy',
  'url': 'https://kadapa-tkd.vercel.app',
  'telephone': '+918522833600',
  'sport': ['Taekwondo', 'Karate', 'Martial Arts'],
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'DSA Municipal Stadium',
    'addressLocality': 'Kadapa',
    'addressRegion': 'Andhra Pradesh',
    'postalCode': '516001',
    'addressCountry': 'IN',
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '14.4673',
    'longitude': '78.8242',
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    'opens': '05:00',
    'closes': '07:00',
  },
  'founder': {
    '@type': 'Person',
    'name': 'Vijay Bhaskar Reddy',
    'jobTitle': 'Head Coach & Chairman',
    'description': '4th Dan Black Belt, National Gold Medalist, National Referee',
  },
  'sameAs': ['https://wa.me/918522833600'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const announcements = getAnnouncements();
  const hasAnnouncements = announcements.length > 0;
  return (
    <html lang="en" className={`${playfair.variable} ${barlow.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-brand-light text-brand-dark font-body antialiased logo-watermark">
        <AnnouncementBar announcements={announcements} />
        <Navbar hasAnnouncements={hasAnnouncements} />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
