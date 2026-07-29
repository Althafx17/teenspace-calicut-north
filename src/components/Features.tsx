import { motion } from 'framer-motion'
import { BookOpen, Award, Users, Activity } from 'lucide-react'

export default function Features() {
  const pillars = [
    { icon: Award, title: 'Leadership (നേതൃത്വം)', description: 'വിദ്യാർത്ഥികളിൽ നേതൃത്വ ഗുണങ്ങൾ വികസിപ്പിക്കുകയും സമൂഹത്തിന് വഴികാട്ടികളാകാൻ അവരെ പ്രാപ്തരാക്കുകയും ചെയ്യുക.', color: 'from-pink-500/20 to-primary/10', iconColor: 'text-primary' },
    { icon: BookOpen, title: 'Knowledge (വിജ്ഞാനം)', description: 'ക്രിയാത്മകവും ഇസ്ലാമികവുമായ അറിവുകളിലൂടെ ധൈഷണികമായ ശാക്തീകരണവും പഠനമികവും ഉറപ്പുവരുത്തുക.', color: 'from-blue-500/20 to-secondary/10', iconColor: 'text-secondary' },
    { icon: Users, title: 'Brotherhood (സാഹോദര്യം)', description: 'വിദ്യാർത്ഥികൾക്കിടയിൽ സ്നേഹവും പരസ്പര സഹകരണവും വർദ്ധിപ്പിച്ച് ശക്തമായ ഒരു സൗഹൃദവലയം തീർക്കുക.', color: 'from-teal-500/20 to-emerald-500/10', iconColor: 'text-emerald-400' },
    { icon: Activity, title: 'Character (സ്വഭാവ സംസ്കരണം)', description: 'ധാർമ്മിക മൂല്യങ്ങളിലൂന്നിയ ജീവിതശൈലി പകർന്നു നൽകി ഉന്നതമായ വ്യക്തിത്വം രൂപപ്പെടുത്തിയെടുക്കുക.', color: 'from-purple-500/20 to-violet-500/10', iconColor: 'text-purple-400' },
  ]

  return (
    <section id="features" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">OUR PILLARS</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Why Attend the <span className="text-secondary">TEENSPACE?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-text-muted mt-4 text-sm md:text-base leading-relaxed">
            ഈ സമ്മേളനം വിദ്യാർത്ഥികൾക്ക് അവരുടെ ജീവിതലക്ഷ്യങ്ങൾ തിരിച്ചറിയാനും പുതിയൊരു കാഴ്ചപ്പാട് രൂപപ്പെടുത്താനും സഹായകരമാകുന്ന നാല് അടിസ്ഥാന ശിലകളെ മുൻനിർത്തിയാണ്.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col items-start gap-5 relative group overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center relative z-10 ${pillar.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{pillar.title}</h3>
                <p className="text-xs md:text-sm text-text-muted leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
