export default function TaekwondoMeaning() {
  const meanings = [
    { korean: '태', romanized: 'TAE',  meaning: '"Foot", "Leg", or "to step on"' },
    { korean: '권', romanized: 'KWON', meaning: '"Fist" or "Fight"' },
    { korean: '도', romanized: 'DO',   meaning: '"Way" or "Discipline"' },
  ];

  return (
    <section style={{ backgroundColor: '#0f172a', padding: '80px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#dc2626' }} />
            <span style={{ color: '#dc2626', fontSize: '11px', fontWeight: '600', letterSpacing: '0.3em', textTransform: 'uppercase' }}>The Name</span>
            <div style={{ width: '24px', height: '2px', backgroundColor: '#dc2626' }} />
          </div>
          <div style={{ fontSize: '72px', color: 'rgba(255,255,255,0.08)', fontWeight: 'bold', letterSpacing: '0.2em', lineHeight: 1, marginBottom: '12px' }}>
            태권도
          </div>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '900', margin: 0 }}>
            What Does Taekwondo Mean?
          </h2>
        </div>

        {/* Rows */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {meanings.map(({ korean, romanized, meaning }, i) => (
            <div
              key={romanized}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0',
                padding: '28px 0',
                borderBottom: i < meanings.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              {/* Korean char */}
              <div style={{ width: '80px', textAlign: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '48px', color: 'rgba(255,255,255,0.25)', fontWeight: 'bold', lineHeight: 1 }}>
                  {korean}
                </span>
              </div>

              {/* Red divider */}
              <div style={{ width: '2px', height: '48px', backgroundColor: '#dc2626', flexShrink: 0, margin: '0 24px' }} />

              {/* Romanized name */}
              <div style={{ width: '120px', flexShrink: 0 }}>
                <span style={{ color: '#dc2626', fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: '900', letterSpacing: '0.05em' }}>
                  {romanized}
                </span>
              </div>

              {/* Grey divider */}
              <div style={{ width: '1px', height: '48px', backgroundColor: 'rgba(255,255,255,0.1)', flexShrink: 0, margin: '0 24px' }} />

              {/* Meaning */}
              <div style={{ flex: 1 }}>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', fontFamily: 'inherit' }}>
                  means {meaning}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', margin: 0 }}>
            태권도 — The Way of Foot and Fist
          </p>
        </div>
      </div>
    </section>
  );
}
