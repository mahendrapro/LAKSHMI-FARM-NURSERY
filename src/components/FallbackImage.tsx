'use client';
interface Props { src: string; fallback: string; alt: string; className?: string; }
export default function FallbackImage({ src, fallback, alt, className }: Props) {
  return (
    <img src={src || fallback} alt={alt} className={className}
      onError={(e) => { (e.target as HTMLImageElement).src = fallback; }} />
  );
}
