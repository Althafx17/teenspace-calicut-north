import { motion } from 'framer-motion'
import { ClipboardList, UserCheck, Compass, Calendar, Award } from 'lucide-react'

export default function Timeline() {
  const steps = [
    { icon: ClipboardList, title: 'Online Registration (റെജിസ്ട്രേഷൻ)', date: 'Starts July 2026', desc: 'വിദ്യാർത്ഥികൾക്കായി ഓൺലൈൻ രജിസ്ട്രേഷൻ പോർട്ടൽ ആരംഭിക്കുന്നു. കോഴിക്കോട് നോർത്തിലെ താല്പര്യമുള്ള എല്ലാ വിദ്യാർത്ഥികൾക്കും അപേക്ഷിക്കാം.', color: 'border-pink-500 text-pink-500 bg-pink-500/10' },
    { icon: UserCheck, title: 'Selection Process (തിരഞ്ഞെടുപ്പ്)', date: 'August - September 2026', desc: 'രജിസ്റ്റർ ചെയ്ത അപേക്ഷകരിൽ നിന്നും അഭിമുഖം വഴി സമ്മേളന പ്രതിനിധികളെ തെരഞ്ഞെടുക്കുന്നു.', color: 'border-blue-500 text-blue-500 bg-blue-500/10' },
    { icon: Compass, title: 'Orientation Session (ഓറിയന്റേഷൻ)', date: 'October 10, 2026', desc: 'സമ്മേളനത്തിൽ പങ്കെടുക്കുന്ന പ്രതിനിധികൾക്കായി പ്രാഥമിക മാർഗനിർദേശങ്ങളും പരിശീലന ക്ലാസുകളും.', color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10' },
    { icon: Calendar, title: 'Grand TEENSPACE (കോൺഫറൻസ് ദിനം)', date: 'October 21, 2026', desc: 'വിവിധ സെഷനുകളിലായി പ്രമുഖ പണ്ഡിതന്മാരും യുവജന നേതാക്കളും പങ്കെടുക്കുന്ന സമ്മേളനം കോഴിക്കോട് നടക്കുന്നു.', color: 'border-primary text-primary bg-primary/10' },
    { icon: Award, title: 'Follow-up Programs (തുടർ പരിപാടികൾ)', date: 'Post-TEENSPACE 2026', desc: 'സമ്മേളനത്തിന് ശേഷം നേതൃത്വ കോഴ്സുകൾ, സ്റ്റഡി സർക്കിളുകൾ, സന്നദ്ധ സേവനങ്ങൾ എന്നിവ തുടരുന്നു.', color: 'border-purple-500 text-purple-400 bg-purple-500/10' },
  ]

  return (
    <section id="timeline" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">ROADMAP</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Event <span className="text-secondary">Timeline</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-text-muted mt-4 text-sm md:text-base">
            രജിസ്ട്രേഷൻ മുതൽ തുടർ പ്രവർത്തനങ്ങൾ വരെയുള്ള പ്രധാന നാഴികക്കല്ലുകൾ.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 bg-slate-800 -translate-x-1/2 z-0" />
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={idx} className={`flex flex-col md:flex-row relative z-10 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ type: 'spring', stiffness: 150, delay: idx * 0.1 }} className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-bg-dark ${step.color} shadow-lg`}>
                      <step.icon className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                  <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="w-full md:w-1/2 pl-16 md:pl-0 md:px-8">
                    <div className="glass-card p-6 rounded-2xl">
                      <span className="inline-block text-xs font-black tracking-widest text-secondary uppercase bg-secondary/10 px-2.5 py-1 rounded-md mb-3">{step.date}</span>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
