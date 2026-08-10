import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Activity } from 'lucide-react'

const pillars = [
  {
    icon: Award,
    title: 'Leadership',
    ml: 'നേതൃത്വം',
    desc: 'Empowering students to take charge, make positive decisions, and inspire peers toward virtue and moral values.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    ml: 'വിജ്ഞാനം',
    desc: 'Integrating moral education with academic learning — developing intellectual capabilities with ethical clarity.',
  },
  {
    icon: Users,
    title: 'Brotherhood',
    ml: 'സാഹോദര്യം',
    desc: 'Building deep-rooted connections of unity, support, and friendship among students across Kozhikode North.',
  },
  {
    icon: Activity,
    title: 'Character',
    ml: 'സ്വഭാവ രൂപീകരണം',
    desc: 'Nurturing upright conduct and moral excellence based on ethical discipline and Islamic teachings.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-[#f7f8fa] py-28 border-t border-slate-200/80">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
          <div className="lg:col-span-6">
            <span className="tag-iris mb-4 inline-flex">four pillars</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-[#0f294a] dala-heading-lg mt-3 font-bold"
            >
              The core values of Teenspace.
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:pt-12">
            <p className="text-slate-600 text-[18px] font-normal leading-relaxed">
              Teenspace 2026 focuses on four key pillars designed to cultivate well-rounded personalities, blending spiritual, academic, and social qualities.
            </p>
          </div>
        </div>

        {/* Pillars List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-200/80">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-6 items-start p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full border border-red-200 bg-red-50/60 flex items-center justify-center text-[#dc2626] flex-shrink-0">
                <p.icon size={20} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-[#0f294a] font-bold text-[20px] tracking-wide">
                    {p.title}
                  </h3>
                  <span className="text-[13px] font-mono text-[#dc2626] font-bold">{p.ml}</span>
                </div>
                <p className="text-slate-600 text-[15px] font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

