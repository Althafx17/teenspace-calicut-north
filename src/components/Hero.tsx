import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'

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
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1600"
          alt="TEENSPACE auditorium background"
          className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-secondary/20 blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/40" />
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-secondary/30 blur-sm"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ y: [0, -100, 0], x: [0, Math.random() * 40 - 20, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="flex flex-col gap-2 md:gap-4">
          <span className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            OCTOBER 21, 2026 • KOZHIKODE
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight mt-2">
            <span className="text-primary block">KOZHIKODE NORTH</span>
            <span className="text-secondary block mt-1">WISDOM STUDENTS</span>
            <span className="text-white block mt-1">TEENSPACE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-base md:text-xl font-medium leading-relaxed mt-6">
            വിജ്ഞാനവും നേതൃത്വപാടവവും ഇസ്ലാമിക മൂല്യങ്ങളും ഉയർത്തിപ്പിടിച്ച്, വിദ്യാർത്ഥി സമൂഹത്തെ നന്മയുടെ പാതയിൽ ശാക്തീകരിക്കുന്നു.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
            <a href="#register" className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-xl hover:-translate-y-1 transition-all duration-300">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-3 px-6 py-4 rounded-full text-base font-semibold text-white hover:text-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 group-hover:border-secondary/40 shadow-md transition-all">
                <Play className="w-4 h-4 text-white fill-white group-hover:text-secondary group-hover:fill-secondary transition-colors ml-0.5" />
              </div>
              Watch Promo
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-xs uppercase tracking-widest text-text-muted">Scroll Down</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }} className="w-1 h-3 rounded-full bg-secondary" />
      </div>
    </section>
  )
}
