// Wisdom Students official logo — two speech bubbles (pink + blue)
export function WisdomLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 56 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Wisdom Students Logo"
    >
      {/* Pink speech bubble (left) */}
      <rect x="0" y="0" width="24" height="28" rx="5" fill="#FF3E8A" />
      <path d="M4 28 L4 36 L12 28 Z" fill="#FF3E8A" />

      {/* Blue speech bubble (right) */}
      <rect x="32" y="0" width="24" height="28" rx="5" fill="#4DA8FF" />
      <path d="M52 28 L52 36 L44 28 Z" fill="#4DA8FF" />

      {/* Notch / cutout on pink bubble bottom-right */}
      <rect x="18" y="18" width="8" height="10" rx="2" fill="#08111F" />

      {/* Notch / cutout on blue bubble bottom-left */}
      <rect x="30" y="18" width="8" height="10" rx="2" fill="#08111F" />
    </svg>
  )
}

export function WisdomWordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <WisdomLogo className="w-10 h-8" />
      <div className="flex flex-col leading-none">
        <span className="text-white font-black text-sm tracking-wider">
          WISD<span className="text-primary">O</span>M{' '}
          <span className="text-secondary">st</span>
          <span className="text-white">udents</span>
        </span>
        <span className="text-[10px] text-text-muted font-bold tracking-widest uppercase mt-0.5">
          Kozhikode North District
        </span>
      </div>
    </div>
  )
}
