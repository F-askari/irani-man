import { useId } from 'react'

// Flat-lay garment illustrations for product cards (matte, minimal, quiet-luxury).

const SHIRT_BODY =
  'M100 30 C 88 32 78 36 70 40 L 56 46 L 28 76 L 46 94 L 62 80 L 62 166 C 76 172 88 174 100 174 C 112 174 124 172 138 166 L 138 80 L 154 94 L 172 76 L 144 46 L 130 40 C 122 36 112 32 100 30 Z'
const TEE_BODY =
  'M100 34 C 91 34 82 37 74 41 L 58 48 L 40 76 L 58 88 L 66 76 L 66 162 C 78 168 89 170 100 170 C 111 170 122 168 134 162 L 134 76 L 142 88 L 160 76 L 142 48 L 126 41 C 118 37 109 34 100 34 Z'
const KNIT_BODY = SHIRT_BODY
const TROUSERS_BODY =
  'M64 34 H136 L144 96 L138 170 H108 L102 100 L100 96 L98 100 L92 170 H62 L56 96 Z'

function Waffle({ uid, ov, dark }) {
  const v = []
  const h = []
  for (let x = 36; x <= 164; x += 7) v.push(`M ${x} 30 V 174`)
  for (let y = 40; y <= 168; y += 11) h.push(`M 30 ${y} H 170`)
  return (
    <g clipPath={`url(#pa-${uid})`} stroke={ov} strokeWidth="1.3" opacity={dark ? 0.16 : 0.08}>
      <path d={v.join(' ')} />
      <path d={h.join(' ')} />
    </g>
  )
}

export default function ProductArt({ type, color, dark = false, className = '' }) {
  const uid = useId().replace(/:/g, '')
  const ov = dark ? '#FFFFFF' : '#1A1A1A'
  const op = dark ? (o) => o * 0.8 : (o) => o
  const clipBody = type === 'shirt' || type === 'knit' ? SHIRT_BODY : TEE_BODY

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true">
      <defs>
        <clipPath id={`pa-${uid}`}>
          <path d={clipBody} />
        </clipPath>
      </defs>
      <ellipse cx="100" cy="186" rx="62" ry="8" fill="#1A1A1A" opacity="0.05" />

      {(type === 'shirt' || type === 'tee' || type === 'knit') && (
        <>
          <path d={clipBody} fill={color} />
          <Waffle uid={uid} ov={ov} dark={dark} />
          {type !== 'knit' && (
            <path d="M86 31 C 90 43 110 43 114 31 L107 26 C 104 32 96 32 93 26 Z" fill={ov} opacity={op(0.12)} />
          )}
          {type === 'knit' && <ellipse cx="100" cy="34" rx="12" ry="6.5" fill={ov} opacity={op(0.14)} />}
          {type === 'shirt' && (
            <>
              <path d="M100 40 V 172" stroke={ov} strokeWidth="1.6" opacity={op(0.12)} />
              {[60, 92, 124, 152].map((y) => (
                <circle key={y} cx="100" cy={y} r="2" fill={ov} opacity={op(0.18)} />
              ))}
            </>
          )}
          <ellipse cx="76" cy="52" rx="16" ry="7" fill="#fff" opacity={dark ? 0.08 : 0.16} transform="rotate(-20 76 52)" />
        </>
      )}

      {(type === 'trousers' || type === 'jeans') && (
        <>
          <path d={TROUSERS_BODY} fill={color} />
          <path d="M64 34 H136 V46 H64 Z" fill={ov} opacity={op(0.12)} />
          <circle cx="100" cy="40" r="2" fill={ov} opacity={op(0.2)} />
          {type === 'trousers' ? (
            <g stroke={ov} strokeWidth="1.6" opacity={op(0.1)}>
              <path d="M80 52 V 160 M120 52 V 160" />
            </g>
          ) : (
            <g stroke="#C5A059" strokeWidth="1.4" opacity="0.5" fill="none">
              <path d="M70 52 Q 84 66 79 84" />
              <path d="M130 52 Q 116 66 121 84" />
              <path d="M74 60 V 160 M126 60 V 160" strokeDasharray="4 3" />
            </g>
          )}
          <ellipse cx="90" cy="42" rx="14" ry="5" fill="#fff" opacity={dark ? 0.07 : 0.14} transform="rotate(-15 90 42)" />
        </>
      )}

      {type === 'belt' && (
        <>
          <rect x="16" y="84" width="152" height="25" rx="12.5" fill={color} />
          <rect x="20" y="88" width="144" height="8" rx="4" fill="#fff" opacity="0.14" />
          {[38, 50, 62].map((x) => (
            <circle key={x} cx={x} cy="96.5" r="2.2" fill="#1A1A1A" opacity="0.22" />
          ))}
          <rect x="148" y="76" width="36" height="41" rx="9" fill="none" stroke="#232323" strokeWidth="5" opacity="0.85" />
          <path d="M166 76 V 117" stroke="#232323" strokeWidth="4" opacity="0.85" />
        </>
      )}
    </svg>
  )
}
