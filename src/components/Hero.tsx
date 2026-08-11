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

  const dates = ['21', '22', '23']

  return (
    <section id="home" className="relative bg-white overflow-hidden border-b border-[#e5e7eb] py-10 lg:py-16">
      
      {/* Background soft ambient light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-100/50 via-sky-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Heading Lockup + Dates + Countdown */}
        <div className="lg:col-span-7 z-10">
          
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
          <h1 className="text-[46px] sm:text-[62px] lg:text-[74px] font-black tracking-tight text-[#0f294a] leading-none mb-1">
            Teenspace <span className="text-[#dc2626]">2026</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-[13px] sm:text-[15px] font-extrabold tracking-[0.2em] text-[#0f294a] uppercase mb-6">
            WISDOM STUDENTS — KOZHIKODE NORTH
          </p>

          {/* Date Badges Row (Red Theme Reverted) */}
          <div className="flex items-center gap-3 mb-6">
            {dates.map((d, i) => (
              <div
                key={i}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#b91c1c] text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-red-500/25 tracking-tight transform hover:scale-105 transition-transform"
              >
                {d}
              </div>
            ))}
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

          {/* Pill Register Button */}
          <div>
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#29b6f6] to-[#0284c7] text-white text-base font-bold tracking-wider shadow-xl shadow-sky-400/30 hover:scale-105 hover:shadow-2xl hover:shadow-sky-400/40 active:scale-100 transition-all uppercase"
            >
              Register Now <ArrowRight size={18} />
            </a>
          </div>

        </div>

        {/* Right Column: Seamlessly Blended Ocean Wave Cutout */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-cyan-200/30 to-blue-500/10 rounded-full blur-3xl animate-wave-swell" />

          {/* Blended Ocean Wave Container */}
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] aspect-[9/16] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white animate-wave-motion blend-ocean-edges">
            
            {/* Ocean Image */}
            <img
              src="/hero-ocean.png"
              alt="Teenspace Ocean Beach Wave"
              className="w-full h-full object-cover"
            />

            {/* Multi-Edge Soft Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f294a]/60 via-transparent to-white/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/10 pointer-events-none" />

            {/* Glassmorphic Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-xl text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#dc2626]">
                Wisdom Students Conference
              </span>
              <p className="text-sm font-black text-[#0f294a] mt-0.5">
                Payyoli, Kozhikode North 2026
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}
