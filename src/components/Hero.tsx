import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import TeenspaceLogoParticles from '@/components/TeenspaceLogoParticles'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
})

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-void overflow-hidden">
      {/* HTML5 Canvas Background Particle Constellation in the shape of Teenspace / Wisdom Logo */}
      <TeenspaceLogoParticles />

      {/* Grid container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status/Badge */}
          <motion.div {...fadeUp(0)} className="mb-8 flex flex-wrap gap-2 items-center">
            <span className="tag-iris font-mono text-[13px] font-medium">
              October 21, 2026
            </span>
            <span className="tag-saffron font-mono text-[13px] font-medium">
              Kozhikode North
            </span>
            <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FF3E8A] bg-[#FF3E8A]/10 rounded-full">
              +1 &amp; +2 Only
            </span>
          </motion.div>

          {/* Outsized display header */}
          <motion.h1
            {...fadeUp(0.05)}
            className="font-display text-transparent bg-gradient-to-r from-[#FF3E8A] via-[#8052ff] to-[#4DA8FF] bg-clip-text dala-display mb-4 font-black"
          >
            teenspace
          </motion.h1>

          <motion.div {...fadeUp(0.1)} className="flex flex-col gap-1 mb-8">
            <p className="text-[#0f172a] text-[24px] uppercase font-bold tracking-[0.2em] leading-none">
              WISDOM STUDENTS
            </p>
            <p className="text-[#4DA8FF] text-[20px] uppercase font-bold tracking-[0.25em] leading-none">
              KOZHIKODE NORTH
            </p>
          </motion.div>

          {/* Body description (weight 200/300 light) */}
          <motion.p
            {...fadeUp(0.15)}
            className="text-[#475569] text-[18px] font-normal leading-relaxed max-w-xl mb-10"
          >
            An exclusive secondary students conference empowering Plus One and Plus Two youth with leadership, knowledge, brotherhood, and moral character.
          </motion.p>

          {/* Call to Actions */}
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center gap-6">
            <a href="#register" className="btn-iris">
              Register Now <ArrowRight size={14} className="ml-1" />
            </a>
            <a
              href="#highlights"
              className="btn-ghost font-semibold text-[14px] uppercase tracking-[0.025em]"
            >
              Explore Gallery
            </a>
          </motion.div>
        </div>

        {/* Right Column: Free space for canvas particles to dominate visually */}
        <div className="hidden lg:block lg:col-span-5 h-[400px] pointer-events-none" />
      </div>
    </section>
  )
}
