import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

function getContentFiles(folder: string) {
  const dir = path.join(contentDir, folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}

function parseFile(folder: string, filename: string): any {
  const raw = fs.readFileSync(path.join(contentDir, folder, filename), 'utf-8');
  const { data } = matter(raw);
  return { ...data, _filename: filename };
}

function getAll(folder: string): any[] {
  return getContentFiles(folder).map((f) => parseFile(folder, f));
}

// Sort: items with explicit order first (ascending), then rest by date desc or filename
function sortByOrderThenDate(items: Record<string, any>[]): Record<string, any>[] {
  const withOrder = items
    .filter((i) => i.order != null && i.order !== '')
    .sort((a, b) => Number(a.order) - Number(b.order));

  const withoutOrder = items
    .filter((i) => i.order == null || i.order === '')
    .sort((a, b) => {
      if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
      return (a._filename || '').localeCompare(b._filename || '');
    });

  return [...withOrder, ...withoutOrder];
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  button_text: string;
  button_link: string;
  order?: number;
}

export interface Event {
  title: string;
  date: string;
  description: string;
  image?: string;
  photos?: string[];
}

export interface GalleryItem {
  image: string;
  caption?: string;
  show_in_hero?: boolean;
  order?: number;
}

export interface Announcement {
  title: string;
  date: string;
  pinned: boolean;
  badge: 'NEW' | 'URGENT' | 'UPDATE' | 'INFO';
  link?: string;
  link_type: 'url' | 'pdf' | 'none';
  pdf?: string;
  active: boolean;
}

export interface VideoItem {
  title: string;
  url: string;
  active: boolean;
  order?: number;
}

export interface SiteSettings {
  map_embed_url?: string;
}

export function getHeroSlides(): HeroSlide[] {
  const manual = sortByOrderThenDate(getAll('hero')) as HeroSlide[];

  const fromGallery = sortByOrderThenDate(
    getAll('gallery').filter((g) => g.show_in_hero)
  ).map((g) => ({
    title: 'Kadapa Tae Kwon Do Club',
    subtitle: (g.caption as string) || 'Training champions since 2010',
    image: g.image as string,
    button_text: 'Join Training',
    button_link: 'https://wa.me/918522833600?text=Hello%20Sir,%20I%20want%20to%20join%20Taekwondo%20training',
  }));

  return [...manual, ...fromGallery];
}

export function getEvents(): Event[] {
  return getAll('events')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as Event[];
}

export function getEventPhotos(event: Event): string[] {
  const photos: string[] = [];
  if (event.image) photos.push(event.image);
  if (event.photos) event.photos.forEach((p) => { if (p && !photos.includes(p)) photos.push(p); });
  return photos;
}

export function getGallery(): GalleryItem[] {
  return sortByOrderThenDate(getAll('gallery')) as GalleryItem[];
}

export function getAnnouncements(): Announcement[] {
  return getAll('announcements')
    .filter((a) => a.active !== false)
    .sort((a, b) => {
      // 1. Pinned always before unpinned
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      // 2. Within same group: explicit order takes priority
      const aOrder = (a.order != null && a.order !== '') ? Number(a.order) : null;
      const bOrder = (b.order != null && b.order !== '') ? Number(b.order) : null;
      if (aOrder !== null && bOrder !== null) return aOrder - bOrder;
      if (aOrder !== null) return -1;
      if (bOrder !== null) return 1;
      // 3. No order set — sort by date descending
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }) as Announcement[];
}

export function getVideos(): VideoItem[] {
  return sortByOrderThenDate(
    getAll('videos').filter((v) => v.active !== false && v.url)
  ) as VideoItem[];
}

export function getSiteSettings(): SiteSettings {
  const settingsPath = path.join(contentDir, 'settings', 'site.md');
  if (!fs.existsSync(settingsPath)) return {};
  const raw = fs.readFileSync(settingsPath, 'utf-8');
  return matter(raw).data as SiteSettings;
}
