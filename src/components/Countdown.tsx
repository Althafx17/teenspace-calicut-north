import { useCountdown } from '@/hooks/useCountdown'

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2026-10-21T09:00:00')
  const blocks = [
    { v: days,    l: 'Days'    },
    { v: hours,   l: 'Hours'   },
    { v: minutes, l: 'Minutes' },
    { v: seconds, l: 'Seconds' },
  ]

  if (isExpired) {
    return (
      <div className="flex items-center gap-3 py-4">
        <span className="inline-flex px-3 py-1 rounded-md bg-red-50 text-[#dc2626] text-xs font-bold uppercase border border-red-100 tracking-widest">
          Live Now
        </span>
        <p className="text-[#64748b] text-sm">We are live at Kozhikode North.</p>
      </div>
    )
  }

  return (
    <div>
      <p className="section-label mb-4">Conference Countdown</p>
      <div className="flex flex-wrap gap-3">
        {blocks.map((b, i) => (
          <div key={i} className="countdown-block min-w-[80px]">
            <div
              className="font-bold tabular-nums text-[#0f294a]"
              style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1 }}
            >
              {String(b.v).padStart(2, '0')}
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#dc2626] mt-2">
              {b.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
