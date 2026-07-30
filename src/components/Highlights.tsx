import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: '/WhatsApp Image 2026-07-19 at 4.15.20 PM.jpeg',    title: 'Grand Conference Session',      category: 'main-event'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.21 PM.jpeg',    title: 'Student Leadership Talk',       category: 'leadership'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.22 PM.jpeg',    title: 'Youth Brotherhood Circle',      category: 'brotherhood'  },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.22 PM (1).jpeg',title: 'Knowledge Workshop',            category: 'workshops'    },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.23 PM.jpeg',    title: 'Scholar Panel Discussion',      category: 'scholars'     },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.24 PM.jpeg',    title: 'Interactive Q&A',              category: 'discussions'  },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.25 PM.jpeg',    title: 'Motivational Session',          category: 'motivation'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.26 PM.jpeg',    title: 'Community Gathering',           category: 'community'    },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.27 PM.jpeg',    title: 'Academic Study Circle',         category: 'academic'     },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.27 PM (1).jpeg',title: 'Volunteers Meet',               category: 'volunteers'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.28 PM.jpeg',    title: 'Conference Closing Ceremony',   category: 'closing'      },
]

export default function Highlights() {
  const [sel, setSel] = useState<number | null>(null)

  const prev = () => setSel(i => i === null ? null : i === 0 ? images.length - 1 : i - 1)
  const next = () => setSel(i => i === null ? null : i === images.length - 1 ? 0 : i + 1)

  return (
    <section id="highlights" className="bg-void border-t border-graphite py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mono-label violet-text mb-3">
            conference gallery
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
            className="font-normal text-bone tracking-tight"
            style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-2px', lineHeight: 1.1 }}
          >
            From the ground.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-ash text-[14px] mt-3"
          >
            {images.length} photos from previous Teenspace editions.
          </motion.p>
        </div>

        {/* ── Grid ──────────────────────────────────────────────────────
            Mobile  : 1 column — full-width list, images at natural ratio
            Tablet  : 2 columns
            Desktop : 3 columns
        ─────────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-graphite border border-graphite rounded-card overflow-hidden">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="relative group cursor-pointer bg-void"
              onClick={() => setSel(i)}
            >
              {/* Natural-ratio image — never cropped */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-void/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-5">
                <div>
                  <span className="mono-label violet-text text-[11px] block mb-1">{img.category}</span>
                  <p className="text-white text-[13px] font-medium leading-snug">{img.title}</p>
                </div>
                <ZoomIn size={16} className="text-ash flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {sel !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-[#000000f2] backdrop-blur-[25px] flex items-center justify-center p-4"
            onClick={() => setSel(null)}
          >
            <button onClick={() => setSel(null)} className="absolute top-5 right-5 btn-ghost p-2 text-ash" aria-label="Close">
              <X size={16} />
            </button>
            <button onClick={e => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 btn-ghost p-3 text-ash" aria-label="Prev">
              <ChevronLeft size={16} />
            </button>

            <motion.div
              key={sel}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              onClick={e => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              <img
                src={images[sel].src}
                alt={images[sel].title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto block rounded-card border border-graphite"
              />
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <span className="mono-label violet-text text-[11px] block">{images[sel].category}</span>
                  <p className="text-bone text-[14px] font-medium mt-0.5">{images[sel].title}</p>
                </div>
                <span className="mono-label">{sel + 1} / {images.length}</span>
              </div>
            </motion.div>

            <button onClick={e => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 btn-ghost p-3 text-ash" aria-label="Next">
              <ChevronRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
