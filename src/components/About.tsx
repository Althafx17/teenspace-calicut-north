import { motion } from 'framer-motion'
import { Compass, Eye, ShieldCheck } from 'lucide-react'

const blocks = [
  {
    icon: Compass,
    title: 'Mission',
    ml: 'ദൗത്യം',
    body: 'Empowering Higher Secondary students through knowledge acquisition, character transformation, and social responsibility.',
  },
  {
    icon: Eye,
    title: 'Vision',
    ml: 'ദർശനം',
    body: 'A student generation built on moral integrity, leadership potential, and mutual brotherhood.',
  },
  {
    icon: ShieldCheck,
    title: 'Objectives',
    ml: 'ലക്ഷ്യങ്ങൾ',
    body: 'Providing academic direction, fostering ethical standards, and conducting student development programs.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-void py-32 border-t border-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Two-Column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          
          {/* Left: Headline block (occupied left half) */}
          <div className="lg:col-span-6">
            <span className="tag-saffron mb-4">who we are</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-white dala-heading-lg mt-4"
            >
              Enlightening<br />young minds.
            </motion.h2>
          </div>

          {/* Right: Body copy + details (occupied right half) */}
          <div className="lg:col-span-6 lg:pt-14 flex flex-col gap-6">
            <p className="text-[#bdbdbd] text-[18px] font-light leading-relaxed">
              Kozhikode North Wisdom Students represents the Higher Secondary student wing — working actively across schools, colleges, and local areas to construct a morally grounded student community.
            </p>
            <p className="text-[#9a9a9a] text-[16px] font-light leading-relaxed">
              Through Teenspace 2026, we aim to bridge the gap between academic education and moral values, providing a healthy environment for intellectual and ethical development.
            </p>
          </div>
        </div>

        {/* Three Columns - Floating layout (no cards, no borders, just whitespace) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-[#111111]">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#8052ff]">
                  <b.icon size={18} />
                </span>
                <h3 className="text-white font-medium text-[20px] uppercase tracking-wide">
                  {b.title}
                </h3>
                <span className="text-[12px] font-mono text-[#ffb829]">{b.ml}</span>
              </div>
              <p className="text-[#9a9a9a] text-[15px] font-light leading-relaxed">
                {b.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
