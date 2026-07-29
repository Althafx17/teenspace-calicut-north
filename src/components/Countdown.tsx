import { useCountdown } from '@/hooks/useCountdown'
import { motion } from 'framer-motion'
import { BellRing } from 'lucide-react'

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2026-10-21T09:00:00')

  const blocks = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ]

  return (
    <section className="py-20 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-white/5 text-secondary text-xs font-bold tracking-widest uppercase mb-6">
          <BellRing className="w-3.5 h-3.5 animate-bounce text-primary" />
          COUNTDOWN TO THE BIG DAY
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white tracking-tight mb-12">
          The TEENSPACE Begins In
        </motion.h2>
        {isExpired ? (
          <div className="glass-card p-10 rounded-3xl max-w-xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">The TEENSPACE has begun!</h3>
            <p className="text-text-muted mt-2 text-sm">Join us live or watch our updates at Kozhikode North.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {blocks.map((block, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden group shadow-lg">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-5xl md:text-7xl font-black tracking-tight text-white mb-2 font-mono tabular-nums">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-xs md:text-sm font-black tracking-widest text-text-muted uppercase">{block.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
