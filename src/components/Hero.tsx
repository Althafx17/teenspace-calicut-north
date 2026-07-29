import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { WisdomLogoMark } from '@/components/WisdomLogo'

export default function Hero() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/WhatsApp Image 2026-07-19 at 4.15.20 PM.jpeg"
          alt="Teenspace conference background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/75 to-bg-dark/30" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-secondary/30 blur-sm"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -80, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4"
        >
          {/* Wisdom Students branding badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border border-white/10 mb-2"
          >
            <WisdomLogoMark size={28} />
            <div className="text-left">
              <p className="text-white font-black text-xs tracking-widest leading-none">
                WISD<span className="text-primary">O</span>M <span className="text-secondary">st</span>udents
              </p>
              <p className="text-slate-400 text-[9px] font-bold tracking-widest uppercase">
                Kozhikode North District
              </p>
            </div>
            <div className="w-px h-6 bg-white/10 mx-1" />
            <span className="text-xs font-bold text-secondary tracking-wider">PRESENTS</span>
          </motion.div>

          {/* TEENSPACE — main title */}
          <div className="relative">
            {/* Decorative speech bubble 't' letter like the real logo */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[clamp(4rem,15vw,9rem)] font-black tracking-tight leading-none select-none"
            >
              <span className="text-white">t</span>
              <span className="inline-block relative">
                <span className="text-primary">e</span>
                {/* The 'e' has a speech bubble cutout — just style */}
              </span>
              <span className="text-secondary">e</span>
              <span className="text-white">nspace</span>
            </motion.h1>

            {/* Glow behind title */}
            <div className="absolute inset-0 blur-[60px] opacity-20 pointer-events-none">
              <span className="text-[clamp(4rem,15vw,9rem)] font-black text-primary">teenspace</span>
            </div>
          </div>

          {/* Subtitle line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-1 mt-1"
          >
            <p className="text-slate-200 text-lg md:text-2xl font-black tracking-[0.3em] uppercase">
              WISDOM STUDENTS
            </p>
            <p className="text-secondary text-base md:text-xl font-black tracking-[0.4em] uppercase">
              KOZHIKODE
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
          </motion.div>

          {/* Tag line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-sm md:text-base font-semibold tracking-wider mt-2"
          >
            SECONDARY STUDENTS CONFERENCE
          </motion.p>

          {/* Event meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-white font-bold text-sm">OCTOBER 21, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10">
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-white font-bold text-sm">KOZHIKODE NORTH</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <a
              href="#register"
              className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#highlights"
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white glass-card border border-white/10 hover:border-secondary/40 hover:text-secondary transition-all duration-300"
            >
              View Gallery
            </a>
          </motion.div>

          {/* For +1 & +2 only badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary font-bold tracking-wider">
              FOR PLUS ONE & PLUS TWO STUDENTS ONLY
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-1 h-4 rounded-full bg-gradient-to-b from-primary to-secondary"
        />
      </div>
    </section>
  )
}
