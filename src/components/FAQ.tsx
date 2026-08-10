import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  { q: 'Who can attend Teenspace 2026?',         a: 'Only Higher Secondary students from schools and higher secondary institutions within Kozhikode North District.' },
  { q: 'Is there a registration fee?',           a: 'No. Registration and attendance is completely free for all selected delegates. No charges are collected at any stage.' },
  { q: 'Will everyone who registers get in?',    a: 'No — seats are limited. Selected delegates will be notified individually by phone or email after the review process.' },
  { q: 'When is the orientation session?',       a: 'October 10, 2026. Attendance is mandatory for all confirmed delegates. Venue details will be shared after selection.' },
  { q: 'Will food and materials be provided?',   a: 'Yes. All selected delegates will receive meals and a study kit on the conference day at no cost.' },
  { q: 'How do I stay updated on my status?',    a: 'Follow our social media pages or check your registered email. We will contact you directly once the selection process is complete.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#f7f8fa] border-t border-slate-200/80 py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        <div className="mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="tag-iris mb-3 inline-flex">faq</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-[#0f294a] dala-heading-lg font-bold"
          >
            Common questions.
          </motion.h2>
        </div>

        <div className="max-w-3xl bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={i !== faqs.length - 1 ? 'border-b border-slate-200/80' : ''}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-150 group"
              >
                <span className="text-[#0f294a] text-[16px] font-bold pr-6 group-hover:text-[#dc2626] transition-colors">{f.q}</span>
                <span className="text-slate-400 flex-shrink-0 transition-colors group-hover:text-[#dc2626]">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
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
                    <p className="px-6 pb-5 text-slate-600 text-[14px] leading-relaxed">{f.a}</p>
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

