// Wisdom Students official logo — exact match of the two speech bubble mark
// Pink bubble (left/front) + Blue bubble (right/back)

interface WisdomLogoMarkProps {
  size?: number
  className?: string
}

export function WisdomLogoMark({ size = 48, className = '' }: WisdomLogoMarkProps) {
  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 60 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Wisdom Students logo mark"
    >
      {/* Blue speech bubble — back / right */}
      <rect x="22" y="0" width="34" height="30" rx="6" fill="#4DA8FF" />
      <path d="M50 30 L56 40 L42 30 Z" fill="#4DA8FF" />

      {/* Pink speech bubble — front / left */}
      <rect x="4" y="6" width="34" height="30" rx="6" fill="#FF3E8A" />
      <path d="M8 36 L2 46 L20 36 Z" fill="#FF3E8A" />

      {/* Small white gap between the two bubbles for clarity */}
      <rect x="21" y="5" width="3" height="32" rx="1" fill="transparent" />
    </svg>
  )
}

export function WisdomWordmark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <WisdomLogoMark size={44} />
      <div className="flex flex-col leading-none gap-0.5">
        <div className="flex items-baseline gap-0">
          <span className={`font-black text-sm tracking-tight ${dark ? 'text-slate-900' : 'text-white'}`}>
            WISD
          </span>
          {/* Eye / O mark */}
          <span className="text-sm font-black text-primary">O</span>
          <span className={`font-black text-sm tracking-tight ${dark ? 'text-slate-900' : 'text-white'}`}>
            M{' '}
          </span>
          <span className="font-black text-sm text-secondary">st</span>
          <span className={`font-black text-sm ${dark ? 'text-slate-900' : 'text-white'}`}>udents</span>
        </div>
        <span className={`text-[9px] font-bold tracking-widest uppercase ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
          Kozhikode North District
        </span>
      </div>
    </div>
  )
}
