interface Props {
  eyebrow?: string; title: string; subtitle?: string;
  align?: 'left' | 'center'; dark?: boolean;
}
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', dark = false }: Props) {
  const center = align === 'center';
  return (
    <div className={`flex flex-col ${center ? 'items-center text-center' : 'items-start text-left'} mb-10`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
          <div className="w-6 h-0.5 bg-brand-red" />
          <span className="text-brand-red text-xs font-body font-semibold uppercase tracking-[0.3em]">{eyebrow}</span>
          {center && <div className="w-6 h-0.5 bg-brand-red" />}
        </div>
      )}
      <h2 className={`font-display font-black text-3xl md:text-5xl leading-tight ${dark ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 font-body leading-relaxed max-w-2xl text-base ${dark ? 'text-white/60' : 'text-brand-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
