import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Who can attend Teenspace 2026?',         a: 'Only Plus One (+1) and Plus Two (+2) students from schools and higher secondary institutions within Kozhikode North District.' },
  { q: 'Is there a registration fee?',           a: 'No. Registration and attendance is completely free for all selected delegates. No charges are collected at any stage.' },
  { q: 'Will everyone who registers get in?',    a: 'No — seats are limited. Selected delegates will be notified individually by phone or email after the review process.' },
  { q: 'When is the orientation session?',       a: 'October 10, 2026. Attendance is mandatory for all confirmed delegates. Venue details will be shared after selection.' },
  { q: 'Will food and materials be provided?',   a: 'Yes. All selected delegates will receive meals and a study kit on the conference day at no cost.' },
  { q: 'How do I stay updated on my status?',    a: 'Follow our social media pages or check your registered email. We will contact you directly once the selection process is complete.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-void border-t border-graphite py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mono-label violet-text mb-3">faq</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-normal text-bone tracking-tight"
            style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-2px', lineHeight: 1.1 }}
          >
            Common questions.
          </motion.h2>
        </div>

        <div className="max-w-3xl border border-graphite rounded-card overflow-hidden">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={i !== faqs.length - 1 ? 'border-b border-graphite' : ''}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-lift transition-colors duration-150 group"
              >
                <span className="text-bone text-[15px] font-normal pr-6 group-hover:text-[#FF3E8A] transition-colors">{f.q}</span>
                <span className="text-iron flex-shrink-0 transition-colors group-hover:text-ash">
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-ash text-[14px] leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
