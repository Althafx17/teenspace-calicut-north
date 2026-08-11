import { ArrowRight } from 'lucide-react'
import Countdown from '@/components/Countdown'

export default function Hero() {
  return (
    <section id="home" className="bg-white border-b border-[#e5e7eb]">
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-16">

        {/* Eyebrow badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-md bg-red-50 text-[#dc2626] text-[11px] font-bold uppercase tracking-widest border border-red-100">
            October 21, 2026
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-md bg-slate-50 text-[#0f294a] text-[11px] font-bold uppercase tracking-widest border border-slate-200">
            PAYYOLI
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-md bg-slate-50 text-[#0f294a] text-[11px] font-bold uppercase tracking-widest border border-slate-200">
            Higher Secondary
          </span>
        </div>

        {/* Headline */}
        <h1 className="display-xl mb-4">
          Teenspace <span className="text-[#dc2626]">2026</span>
        </h1>
        <p className="text-[#0f294a] text-xl font-semibold tracking-[0.15em] uppercase mb-3">
          Wisdom Students — Kozhikode North
        </p>
        <p className="text-[#64748b] text-lg font-normal leading-relaxed max-w-2xl mb-10">
          An exclusive Higher Secondary students conference empowering youth with leadership, knowledge, brotherhood, and moral character.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <a href="#register" className="btn-primary">
            Register Now <ArrowRight size={15} />
          </a>
          <a href="#gallery" className="btn-secondary">
            View Gallery
          </a>
        </div>

        {/* Countdown integrated */}
        <Countdown />
      </div>
    </section>
  )
}
