import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Compass, Eye, ShieldCheck } from 'lucide-react'

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const steps = 50
    const increment = value / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= value) { clearInterval(timer); setCount(value) }
      else setCount(Math.floor(start))
    }, 1200 / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const stats = [
    { value: 5000, suffix: '+', label: 'Students Empowered' },
    { value: 100, suffix: '+', label: 'Volunteers Active' },
    { value: 25, suffix: '+', label: 'Programs Executed' },
    { value: 10, suffix: '+', label: 'Years of Service' },
  ]

  return (
    <section id="about" className="relative py-24 bg-bg-dark overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 40,0 L 80,40 L 40,80 L 0,40 Z M 0,0 L 80,80 M 80,0 L 0,80" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="40" cy="40" r="10" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <span className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">WHO WE ARE</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-3 leading-tight">
              About Kozhikode North <br /><span className="text-secondary">Wisdom Students</span>
            </h2>
            <p className="text-slate-300 mt-6 leading-relaxed text-sm md:text-base">
              കോഴിക്കോട് നോർത്ത് പരിധിയിലെ ഹൈസ്കൂൾ, ഹയർ സെക്കൻഡറി, കോളേജ് തലങ്ങളിലെ വിദ്യാർത്ഥികളുടെ സർവതോമുഖമായ പുരോഗതിക്കായി പ്രവർത്തിക്കുന്ന വിദ്യാർത്ഥി സംഘടനയാണിത്. ധാർമ്മിക ബോധമുള്ള, ഉത്തരവാദിത്തമുള്ള, പ്രബുദ്ധരായ ഒരു വിദ്യാർത്ഥി തലമുറയെ വളർത്തിയെടുക്കുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: Compass, color: 'bg-primary/10 text-primary', title: 'Mission', text: 'ഇസ്ലാമിക മൂല്യങ്ങളിൽ ഊന്നിയ വിജ്ഞാന സമ്പാദനത്തിലൂടെയും സാമൂഹിക സേവനത്തിലൂടെയും വിദ്യാർത്ഥി സമൂഹത്തെ ഉത്തമ സ്വഭാവഗുണമുള്ളവരാക്കി മാറ്റുക.' },
              { Icon: Eye, color: 'bg-secondary/10 text-secondary', title: 'Vision', text: 'സദാചാരബോധമുള്ള, സാമൂഹിക പ്രതിബദ്ധതയുള്ള, പ്രബുദ്ധരായ ഒരു വിദ്യാർത്ഥി തലമുറയെ വളർത്തിയെടുക്കുക.' },
              { Icon: ShieldCheck, color: 'bg-teal-500/10 text-teal-400', title: 'Objectives', text: 'ധാർമ്മിക സംസ്കരണം, വിജ്ഞാനവ്യാപനം, വ്യക്തിത്വ വികസനം, പരസ്പര സാഹോദര്യം എന്നിവ പ്രോത്സാഹിപ്പിക്കുക.' },
            ].map(({ Icon, color, title, text }) => (
              <div key={title} className="glass-card p-6 rounded-2xl flex flex-col gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}><Icon className="w-5 h-5" /></div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-xs text-text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass-card glass-card-hover p-6 rounded-2xl text-center flex flex-col items-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs md:text-sm font-bold text-text-muted uppercase tracking-widest mt-2">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
