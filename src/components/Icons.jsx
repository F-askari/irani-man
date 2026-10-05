const I = ({ children, className = 'w-5 h-5', filled = false, sw = 1.6 }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth={sw}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
)

export const Search = (p) => (
  <I {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M16.5 16.5 21 21" />
  </I>
)

export const User = (p) => (
  <I {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
  </I>
)

export const Bag = (p) => (
  <I {...p}>
    <path d="M5.5 8h13l-1.2 12.2a1.5 1.5 0 0 1-1.5 1.3H8.2a1.5 1.5 0 0 1-1.5-1.3L5.5 8z" />
    <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
  </I>
)

export const Heart = (p) => (
  <I {...p}>
    <path d="M12 20.3C7 16.6 3 13 3 9a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 21 9c0 4-4 7.6-9 11.3z" />
  </I>
)

export const Menu = (p) => (
  <I {...p}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </I>
)

export const Close = (p) => (
  <I {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </I>
)

export const Home = (p) => (
  <I {...p}>
    <path d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-4.5v-5.5h-5V21H4a1 1 0 0 1-1-1z" />
  </I>
)

export const Grid = (p) => (
  <I {...p}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </I>
)

export const Plus = (p) => (
  <I {...p} sw={2}>
    <path d="M12 5v14M5 12h14" />
  </I>
)

export const ArrowLeft = (p) => (
  <I {...p} sw={1.8}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </I>
)

export const Truck = (p) => (
  <I {...p}>
    <path d="M2 7h11v9H2z" />
    <path d="M13 10h4.5l2.5 3v3h-2.5" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="16.5" cy="17.5" r="1.8" />
  </I>
)

export const Shield = (p) => (
  <I {...p}>
    <path d="M12 3l7 3v5.2c0 4.4-2.9 7.4-7 8.8-4.1-1.4-7-4.4-7-8.8V6z" />
    <path d="M9 11.6l2.1 2.1 4-4" />
  </I>
)

export const Headset = (p) => (
  <I {...p}>
    <path d="M4 14a8 8 0 0 1 16 0" />
    <rect x="3" y="13" width="4" height="7" rx="2" />
    <rect x="17" y="13" width="4" height="7" rx="2" />
    <path d="M19 20a4.2 4.2 0 0 1-4.5 2" />
  </I>
)

export const Leaf = (p) => (
  <I {...p}>
    <path d="M6 20C6 11 12 6 20 6c0 8-5 14-13 14" />
    <path d="M6 20c2.5-6 6.5-10 11-12" />
  </I>
)

export const Wind = (p) => (
  <I {...p}>
    <path d="M3 8h9.5a2.5 2.5 0 1 0-2.5-2.5" />
    <path d="M3 12h13.5a2.5 2.5 0 1 1-2.5 2.5" />
    <path d="M3 16h7" />
  </I>
)

export const Waves = (p) => (
  <I {...p}>
    <path d="M2 8c1.7-2.2 3.3-2.2 5 0s3.3 2.2 5 0 3.3-2.2 5 0 1.7 2.2 5 0" />
    <path d="M2 13c1.7-2.2 3.3-2.2 5 0s3.3 2.2 5 0 3.3-2.2 5 0 1.7 2.2 5 0" />
    <path d="M2 18c1.7-2.2 3.3-2.2 5 0s3.3 2.2 5 0 3.3-2.2 5 0 1.7 2.2 5 0" />
  </I>
)

export const Instagram = (p) => (
  <I {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
  </I>
)

export const Telegram = (p) => (
  <I {...p}>
    <path d="M22 3 2 11l7 2.5L11.5 20 22 3z" />
    <path d="M9 13.5 22 3" />
  </I>
)

export const Youtube = (p) => (
  <I {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
    <path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
  </I>
)
