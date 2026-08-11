import { useCountdown } from '@/hooks/useCountdown'

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
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Layout Matching Reference Image 1 */}
        <div className="lg:col-span-7 z-10">
          
          {/* Year */}
          <p className="text-[15px] font-bold tracking-widest text-[#64748b] uppercase mb-1">
            2026
          </p>

          {/* Month Heading */}
          <h1 className="text-[44px] sm:text-[58px] lg:text-[68px] font-black tracking-tight text-[#0f294a] leading-none mb-4">
            OCTOBER
          </h1>

          {/* Date Badges Row */}
          <div className="flex items-center gap-3 mb-4">
            {dates.map((d, i) => (
              <div
                key={i}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#dc2626] to-[#b91c1c] text-white font-black text-2xl sm:text-3xl flex items-center justify-center shadow-lg shadow-red-500/25 tracking-tight transform hover:scale-105 transition-transform"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Location Title */}
          <h2 className="text-[38px] sm:text-[52px] lg:text-[62px] font-black tracking-tight text-[#0f294a] leading-none mb-8">
            KOZHIKODE NORTH
          </h2>

          {/* Countdown Grid (4 Rounded Cards with Top Red Bar) */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-xl mb-4">
            {countdownBlocks.map((b, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-lg shadow-slate-200/60 text-center relative overflow-hidden group hover:border-[#dc2626] transition-all"
              >
                {/* Red accent line on top of each card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-[3px] bg-[#dc2626] rounded-full" />
                
                <div className="text-[28px] sm:text-[42px] lg:text-[48px] font-black text-[#0f294a] tabular-nums leading-none tracking-tight mt-1">
                  {isExpired ? '00' : String(b.value).padStart(2, '0')}
                </div>
                <div className="text-[9px] sm:text-[11px] font-bold text-[#29b6f6] uppercase tracking-widest mt-2">
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
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white text-base font-bold tracking-wider shadow-xl shadow-red-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 active:scale-100 transition-all uppercase"
            >
              Register Now
            </a>
          </div>

        </div>

        {/* Right Column: Hero Graphic with Ocean Wave & Boat */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Animated Glow / Swell Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-sky-200/30 to-red-400/10 rounded-3xl blur-2xl animate-wave-swell" />

          {/* Ocean Wave Frame */}
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 animate-wave-motion">
            
            {/* Ocean Wave Image */}
            <img
              src="/hero-ocean.png"
              alt="Teenspace Ocean Beach Wave"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay for Edge Smoothness */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f294a]/50 via-transparent to-transparent pointer-events-none" />

            {/* Badge overlay on top of graphic */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-center">
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
