import { useCountdown } from '@/hooks/useCountdown'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2026-10-21T09:00:00')

  const countdownBlocks = [
    { value: days,    label: 'DAYS'    },
    { value: hours,   label: 'HOURS'   },
    { value: minutes, label: 'MINUTES' },
    { value: seconds, label: 'SECONDS' },
  ]

  return (
    <section id="home" className="relative bg-white overflow-hidden border-b border-[#e5e7eb] py-12 lg:py-20">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-50/50 via-sky-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Eyebrow Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-red-50 text-[#dc2626] text-[11px] font-extrabold uppercase tracking-widest border border-red-100">
            October 21, 2026
          </span>
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-50 text-[#0f294a] text-[11px] font-extrabold uppercase tracking-widest border border-slate-200">
            Payyoli
          </span>
          <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-slate-50 text-[#0f294a] text-[11px] font-extrabold uppercase tracking-widest border border-slate-200">
            Higher Secondary
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-[48px] sm:text-[66px] lg:text-[80px] font-black tracking-tight text-[#0f294a] leading-none mb-1">
          Teenspace <span className="text-[#dc2626]">2026</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-[13px] sm:text-[16px] font-extrabold tracking-[0.2em] text-[#0f294a] uppercase mb-8">
          WISDOM STUDENTS — KOZHIKODE NORTH
        </p>

        {/* Consolidated Date Badge Element */}
        <div className="flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white font-black text-2xl sm:text-3xl shadow-lg shadow-red-500/25 tracking-tight transform hover:scale-105 transition-transform">
            <span>OCTOBER 21</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
            <span>2026</span>
          </div>
        </div>

        {/* Countdown Grid (4 Cards with Red Accent Bar) */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-xl mb-4">
          {countdownBlocks.map((b, i) => (
            <div
              key={i}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-lg shadow-slate-200/60 text-center relative overflow-hidden group hover:border-[#dc2626] transition-all"
            >
              {/* Red accent line on top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-[3px] bg-[#dc2626] rounded-full" />
              
              <div className="text-[28px] sm:text-[42px] lg:text-[48px] font-black text-[#0f294a] tabular-nums leading-none tracking-tight mt-1">
                {isExpired ? '00' : String(b.value).padStart(2, '0')}
              </div>
              <div className="text-[9px] sm:text-[11px] font-bold text-[#dc2626] uppercase tracking-widest mt-2">
                {b.label}
              </div>
            </div>
          ))}
        </div>

        {/* Sub-label */}
        <p className="text-[11px] sm:text-[12px] font-bold tracking-widest text-[#64748b] uppercase mb-8">
          UNTIL TEENSPACE CONFERENCE — PAYYOLI, KOZHIKODE NORTH
        </p>

        {/* Pill Register Button (Gradient Blue to Pink Theme) */}
        <div>
          <a
            href="#register"
            className="btn-primary register-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold tracking-wider hover:scale-105 transition-all uppercase"
          >
            Register Now <ArrowRight size={18} />
          </a>
        </div>

      </div>

    </section>
  )
}
