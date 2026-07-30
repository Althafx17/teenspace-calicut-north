import { motion } from 'framer-motion'
import { Globe, Mail } from 'lucide-react'

const YtIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const speakers = [
  {
    name: 'Dr. Faisal Moulavi',
    role: 'Islamic Scholar & Writer',
    bio: 'Prominent scholar specializing in modern youth challenges and contemporary Islamic research.',
    image: '/faisal_moulavi.png',
    socials: { youtube: '#', globe: '#', mail: 'mailto:faisal@example.com' },
  },
  {
    name: 'C. P. Saleem',
    role: 'State President, Wisdom Youth',
    bio: 'Dynamic youth leader and powerful orator guiding Kerala students toward ethical excellence.',
    image: '/cp_saleem.jpg',
    socials: { youtube: '#', globe: '#', mail: 'mailto:saleem@example.com' },
  },
  {
    name: 'Mujahid Balussery',
    role: 'Islamic Scholar & Orator',
    bio: 'Prominent orator and scholar known for his energetic lectures and youth guidance sessions.',
    image: '/mujahid_balussery.jpg',
    socials: { youtube: '#', globe: '#', mail: 'mailto:mujahid@example.com' },
  },
  {
    name: 'Haris Bin Saleem',
    role: 'Academician & Scholar',
    bio: 'Expert researcher on Islamic epistemology, philosophy, and history, connecting academic knowledge with moral values.',
    image: '/haris_bin_saleem.png',
    socials: { youtube: '#', globe: '#', mail: 'mailto:haris@example.com' },
  },
]

export default function Speakers() {
  return (
    <section id="speakers" className="bg-void py-32 border-t border-[#e2e8f0]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <span className="tag-saffron mb-4">mentors</span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-bone dala-heading-lg mt-4"
          >
            Scholars &amp; counselors.
          </motion.h2>
        </div>

        {/* Speakers Grid — Floating portraits, 24px radius, no border cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {speakers.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="flex flex-col items-start gap-4"
            >
              {/* Portrait: 24px corner radius */}
              <div className="w-full aspect-square rounded-[24px] overflow-hidden bg-[#f8fafc] border border-[#e2e8f0]">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>

              {/* Text metadata */}
              <div className="flex flex-col gap-1 w-full">
                <span className="text-[12px] uppercase font-bold tracking-wider text-[#FF3E8A]">
                  {s.role}
                </span>
                <h3 className="text-bone font-medium text-[22px] tracking-tight">
                  {s.name}
                </h3>
                <p className="text-ash text-[14px] font-normal leading-relaxed mt-1">
                  {s.bio}
                </p>
              </div>

              {/* Social glyphs */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href={s.socials.youtube}
                  className="text-ash hover:text-[#0f172a] transition-colors"
                  aria-label="YouTube"
                >
                  <YtIcon />
                </a>
                <a
                  href={s.socials.globe}
                  className="text-ash hover:text-[#0f172a] transition-colors"
                  aria-label="Website"
                >
                  <Globe size={14} />
                </a>
                <a
                  href={s.socials.mail}
                  className="text-ash hover:text-[#0f172a] transition-colors"
                  aria-label="Email"
                >
                  <Mail size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
