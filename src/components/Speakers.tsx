import { motion } from 'framer-motion'
import { Globe, Mail } from 'lucide-react'

const YtIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function Speakers() {
  const speakers = [
    { name: 'Dr. Faisal Moulavi', role: 'Islamic Scholar & Writer', bio: 'Prominent scholar and educational leader specializing in modern youth challenges and contemporary Islamic research.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300', socials: { youtube: '#', globe: '#', mail: 'mailto:faisal@example.com' } },
    { name: 'C. P. Saleem', role: 'State President, Wisdom Youth', bio: 'Dynamic youth leader and powerful orator who has guided thousands of Kerala students towards academic and ethical excellence.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300', socials: { youtube: '#', globe: '#', mail: 'mailto:saleem@example.com' } },
    { name: 'Rashid Gazali', role: 'Student Counselor & Coach', bio: 'Renowned counselor specializing in youth leadership, behavior guidance, and career planning.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300', socials: { youtube: '#', globe: '#', mail: 'mailto:rashid@example.com' } },
    { name: 'Haris Ibn Saleem', role: 'Academician & Scholar', bio: 'Expert researcher on Islamic epistemology, philosophy, and history, connecting academic knowledge with Islamic moral values.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300', socials: { youtube: '#', globe: '#', mail: 'mailto:haris@example.com' } },
  ]

  return (
    <section id="speakers" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">MEET OUR MENTORS</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Renowned <span className="text-secondary">Speakers</span> & Scholars
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-text-muted mt-4 text-sm md:text-base">
            വിദ്യാർത്ഥികളുമായി സംവദിക്കാനും ദിശാബോധം നൽകാനും പ്രമുഖ വ്യക്തിത്വങ്ങൾ കോൺഫറൻസിൽ അണിനിരക്കുന്നു.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-surface-dark">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{speaker.name}</h3>
              <span className="text-xs text-primary font-bold tracking-widest uppercase mb-3">{speaker.role}</span>
              <p className="text-xs text-text-muted leading-relaxed mb-5 px-2 flex-grow">{speaker.bio}</p>
              <div className="flex items-center gap-4 relative z-10">
                <a href={speaker.socials.youtube} aria-label={`${speaker.name} YouTube`} className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-text-muted hover:text-red-500 hover:border-red-500/30 transition-all"><YtIcon /></a>
                <a href={speaker.socials.globe} aria-label={`${speaker.name} Website`} className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-text-muted hover:text-secondary hover:border-secondary/30 transition-all"><Globe className="w-4 h-4" /></a>
                <a href={speaker.socials.mail} aria-label={`Email ${speaker.name}`} className="w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all"><Mail className="w-4 h-4" /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
