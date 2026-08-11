import { useCountdown } from '@/hooks/useCountdown'

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2026-10-21T09:00:00')
  const blocks = [
    { v: days,    l: 'DAYS'    },
    { v: hours,   l: 'HOURS'   },
    { v: minutes, l: 'MINUTES' },
    { v: seconds, l: 'SECONDS' },
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
    <div className="grid grid-cols-4 gap-3 max-w-md">
      {blocks.map((b, i) => (
        <div key={i} className="bg-white/90 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-[#dc2626] rounded-full" />
          <div className="text-2xl font-black text-[#0f294a] tabular-nums mt-1">{String(b.v).padStart(2, '0')}</div>
          <div className="text-[10px] font-bold text-[#29b6f6] uppercase tracking-widest mt-1">{b.l}</div>
        </div>
      ))}
    </div>
  )
}
