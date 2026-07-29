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
    <section id="features" className="bg-void py-32 border-t border-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-6">
            <span className="tag-iris mb-4">four pillars</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-white dala-heading-lg mt-4"
            >
              The core values of Teenspace.
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p className="text-[#bdbdbd] text-[18px] font-light leading-relaxed">
              Teenspace 2026 focuses on four key pillars designed to cultivate well-rounded personalities, blending spiritual, academic, and social qualities.
            </p>
          </div>
        </div>

        {/* Pillars List — Spacious floating items with no grid borders or boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 border-t border-[#111111]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full border border-[#222] flex items-center justify-center text-[#8052ff] flex-shrink-0">
                <p.icon size={18} />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-white font-medium text-[20px] tracking-wide">
                    {p.title}
                  </h3>
                  <span className="text-[12px] font-mono text-[#ffb829]">{p.ml}</span>
                </div>
                <p className="text-[#9a9a9a] text-[15px] font-light leading-relaxed">
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
