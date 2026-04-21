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

// ---------------- TYPES ----------------

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  button_text: string;
  button_link: string;
  order?: number;
}

export interface Plant {
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

// ---------------- HERO ----------------

export function getHeroSlides(): HeroSlide[] {
  const manual = sortByOrderThenDate(getAll('hero')) as HeroSlide[];

  const fromGallery = sortByOrderThenDate(
    getAll('gallery').filter((g) => g.show_in_hero)
  ).map((g) => ({
    title: 'Lakshmi Farm Nursery',
    subtitle:
      (g.caption as string) ||
      'Fresh Plants • Healthy Growth • Affordable Prices',
    image: g.image as string,
    button_text: 'Explore Plants',
    button_link:
      'https://wa.me/91XXXXXXXXXX?text=Hi%20I%20am%20interested%20in%20plants',
  }));

  return [...manual, ...fromGallery];
}

// ---------------- PLANTS (was events) ----------------

export function getPlants(): Plant[] {
  return getAll('events')
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    ) as Plant[];
}

export function getPlantPhotos(plant: Plant): string[] {
  const photos: string[] = [];
  if (plant.image) photos.push(plant.image);
  if (plant.photos)
    plant.photos.forEach((p) => {
      if (p && !photos.includes(p)) photos.push(p);
    });
  return photos;
}

// ---------------- GALLERY ----------------

export function getGallery(): GalleryItem[] {
  return sortByOrderThenDate(getAll('gallery')) as GalleryItem[];
}

// ---------------- ANNOUNCEMENTS ----------------

export function getAnnouncements(): Announcement[] {
  return getAll('announcements')
    .filter((a) => a.active !== false)
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

      const aOrder =
        a.order != null && a.order !== '' ? Number(a.order) : null;
      const bOrder =
        b.order != null && b.order !== '' ? Number(b.order) : null;

      if (aOrder !== null && bOrder !== null) return aOrder - bOrder;
      if (aOrder !== null) return -1;
      if (bOrder !== null) return 1;

      return (
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }) as Announcement[];
}

// ---------------- VIDEOS ----------------

export function getVideos(): VideoItem[] {
  return sortByOrderThenDate(
    getAll('videos').filter((v) => v.active !== false && v.url)
  ) as VideoItem[];
}

// ---------------- SETTINGS ----------------

export function getSiteSettings(): SiteSettings {
  const settingsPath = path.join(contentDir, 'settings', 'site.md');
  if (!fs.existsSync(settingsPath)) return {};
  const raw = fs.readFileSync(settingsPath, 'utf-8');
  return matter(raw).data as SiteSettings;
}
