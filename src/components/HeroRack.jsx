// Editorial hero scene: five textured short-sleeved shirts on a suspended wooden rack,
// potted plant at left, matte stone pedestals at right (see reference imagery).

const SHIRTS = [
  { cx: 320, fill: '#EFE2C3', dark: false },
  { cx: 420, fill: '#CDB69B', dark: false },
  { cx: 520, fill: '#C69790', dark: false },
  { cx: 620, fill: '#F6F3EC', dark: false },
  { cx: 720, fill: '#33322E', dark: true },
]

const bodyPath = (cx) =>
  `M ${cx - 56} 124 C ${cx - 36} 110 ${cx - 12} 104 ${cx} 114 C ${cx + 12} 104 ${cx + 36} 110 ${cx + 56} 124 L ${cx + 52} 300 C ${cx + 30} 310 ${cx - 30} 310 ${cx - 52} 300 Z`

function Shirt({ cx, fill, dark, i }) {
  const ov = dark ? '#FFFFFF' : '#1A1A1A'
  const op = dark ? (o) => o * 0.85 : (o) => o
  const vLines = Array.from({ length: 13 }, (_, k) => cx - 48 + k * 8)
  const hLines = Array.from({ length: 16 }, (_, k) => 116 + k * 13)
  return (
    <g>
      {/* hanger */}
      <path
        d={`M ${cx} 98 c -9 0 -12 -8 -6 -12 c 5 -3 10 1 8 6`}
        stroke="#6E5335"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx - 62} 122 L ${cx} 100 L ${cx + 62} 122`}
        stroke="#7A5F3E"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* sleeves */}
      <path d={`M ${cx - 56} 124 L ${cx - 82} 162 L ${cx - 62} 174 L ${cx - 44} 142 L ${cx - 56} 124 Z`} fill={fill} />
      <path d={`M ${cx + 56} 124 L ${cx + 82} 162 L ${cx + 62} 174 L ${cx + 44} 142 L ${cx + 56} 124 Z`} fill={fill} />
      {/* body */}
      <path d={bodyPath(cx)} fill={fill} />
      {/* waffle texture */}
      <g clipPath={`url(#hr-clip-${i})`} stroke={ov} strokeWidth="1.2" opacity={dark ? 0.14 : 0.07}>
        {vLines.map((x) => (
          <path key={`v${x}`} d={`M ${x} 104 V 312`} />
        ))}
        {hLines.map((y) => (
          <path key={`h${y}`} d={`M ${cx - 60} ${y} H ${cx + 60}`} />
        ))}
      </g>
      {/* collar */}
      <path
        d={`M ${cx} 114 L ${cx - 15} 106 L ${cx - 9} 100 L ${cx} 108 L ${cx + 9} 100 L ${cx + 15} 106 Z`}
        fill={ov}
        opacity={op(0.12)}
      />
      {/* placket + buttons */}
      <path d={`M ${cx} 114 V 306`} stroke={ov} strokeWidth="1.5" opacity={op(0.14)} />
      {[150, 190, 230, 270].map((y) => (
        <circle key={y} cx={cx} cy={y} r="2.2" fill={ov} opacity={op(0.2)} />
      ))}
      {/* hem shading */}
      <path
        d={`M ${cx - 52} 300 C ${cx - 30} 310 ${cx + 30} 310 ${cx + 52} 300 L ${cx + 52} 292 C ${cx + 30} 302 ${cx - 30} 302 ${cx - 52} 292 Z`}
        fill={ov}
        opacity={op(0.05)}
      />
    </g>
  )
}

export default function HeroRack({ className = '' }) {
  return (
    <svg viewBox="0 0 960 560" className={className} role="img" aria-label="پیراهن‌های بافت‌دار روی چوب‌لباسی آویزان">
      <defs>
        <linearGradient id="hr-oak" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D8B98C" />
          <stop offset="1" stopColor="#B08D5F" />
        </linearGradient>
        <linearGradient id="hr-stone1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D5D1C7" />
          <stop offset="1" stopColor="#BDB8AC" />
        </linearGradient>
        <linearGradient id="hr-stone2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#DDD9CF" />
          <stop offset="1" stopColor="#C6C1B4" />
        </linearGradient>
        <radialGradient id="hr-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#2D2D2D" stopOpacity="0.10" />
          <stop offset="1" stopColor="#2D2D2D" stopOpacity="0" />
        </radialGradient>
        {SHIRTS.map((s, i) => (
          <clipPath key={s.cx} id={`hr-clip-${i}`}>
            <path d={bodyPath(s.cx)} />
          </clipPath>
        ))}
      </defs>

      {/* soft window-light stripes on the wall */}
      <g opacity="0.045" fill="#2D2D2D">
        <rect x="130" y="40" width="90" height="470" transform="skewX(-7)" />
        <rect x="250" y="40" width="70" height="470" transform="skewX(-7)" />
      </g>

      {/* floor shadows */}
      <ellipse cx="480" cy="516" rx="300" ry="20" fill="url(#hr-shadow)" />
      <ellipse cx="110" cy="518" rx="85" ry="12" fill="url(#hr-shadow)" />
      <ellipse cx="855" cy="518" rx="95" ry="12" fill="url(#hr-shadow)" />

      {/* ropes */}
      <path d="M425 -4 L338 58" stroke="#8B7355" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M535 -4 L622 58" stroke="#8B7355" strokeWidth="3.5" strokeLinecap="round" />

      {/* wooden bar */}
      <rect x="308" y="56" width="384" height="14" rx="7" fill="url(#hr-oak)" />
      <path d="M318 62 H682" stroke="#000" strokeOpacity="0.07" strokeWidth="1.5" />
      <path d="M318 66 H682" stroke="#fff" strokeOpacity="0.18" strokeWidth="1.5" />

      {SHIRTS.map((s, i) => (
        <Shirt key={i} i={i} {...s} />
      ))}

      {/* potted plant */}
      <g>
        <path d="M108 428 C 40 330 30 220 92 150 C 112 250 116 350 112 428 Z" fill="#4F6B52" />
        <path d="M112 428 C 66 360 60 280 96 200 C 116 280 120 360 116 428 Z" fill="#5D7C5F" />
        <path d="M112 428 C 150 340 178 280 160 190 C 120 260 108 350 110 428 Z" fill="#3E5A44" />
        <path d="M112 428 C 150 380 190 350 196 290 C 160 330 130 380 118 428 Z" fill="#4F6B52" />
        <path d="M110 428 C 70 420 40 390 34 340 C 70 370 96 400 104 428 Z" fill="#5D7C5F" />
        <path d="M112 428 C 150 424 186 400 196 372 C 160 390 130 412 116 428 Z" fill="#3E5A44" />
        <path d="M66 428 H156 L148 516 C 128 526 94 526 74 516 Z" fill="#C1996A" />
        <path d="M66 428 H156 L154 446 H68 Z" fill="#A87F52" />
        <path d="M72 456 H150 M76 478 H146 M80 500 H142" stroke="#8F6B42" strokeWidth="2" opacity="0.5" />
        <path d="M88 428 L92 516 M111 428 L111 518 M134 428 L130 516" stroke="#8F6B42" strokeWidth="2" opacity="0.4" />
      </g>

      {/* stone pedestals */}
      <g>
        <rect x="742" y="452" width="182" height="70" rx="14" fill="url(#hr-stone1)" />
        <rect x="742" y="452" width="182" height="12" rx="6" fill="#fff" opacity="0.25" />
        <rect x="762" y="386" width="142" height="62" rx="14" fill="url(#hr-stone2)" />
        <rect x="762" y="386" width="142" height="10" rx="5" fill="#fff" opacity="0.28" />
        <rect x="782" y="330" width="102" height="52" rx="14" fill="url(#hr-stone1)" />
        <rect x="782" y="330" width="102" height="9" rx="4.5" fill="#fff" opacity="0.3" />
      </g>
    </svg>
  )
}
