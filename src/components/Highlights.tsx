import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.20 PM.jpeg',
    title: 'Grand TEENSPACE Session',
    category: 'Main Event',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.21 PM.jpeg',
    title: 'Student Leadership Talk',
    category: 'Leadership',
    className: '',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.22 PM.jpeg',
    title: 'Youth Brotherhood Circle',
    category: 'Brotherhood',
    className: 'md:row-span-2',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.22 PM (1).jpeg',
    title: 'Knowledge Workshop',
    category: 'Workshops',
    className: '',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.23 PM.jpeg',
    title: 'Scholar Panel Discussion',
    category: 'Scholars',
    className: 'md:col-span-2',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.24 PM.jpeg',
    title: 'Interactive Q&A Session',
    category: 'Discussions',
    className: '',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.25 PM.jpeg',
    title: 'Student Motivational Talk',
    category: 'Motivation',
    className: '',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.26 PM.jpeg',
    title: 'Community Gathering',
    category: 'Community',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.27 PM.jpeg',
    title: 'Academic Study Circle',
    category: 'Academic',
    className: '',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.27 PM (1).jpeg',
    title: 'Youth Volunteers Meet',
    category: 'Volunteers',
    className: '',
  },
  {
    src: '/WhatsApp Image 2026-07-19 at 4.15.28 PM.jpeg',
    title: 'TEENSPACE Closing Ceremony',
    category: 'Closing',
    className: 'md:col-span-2',
  },
]

export default function Highlights() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const prev = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
  }

  const next = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
  }

  return (
    <section id="highlights" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase"
          >
            HIGHLIGHTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight"
          >
            TEENSPACE <span className="text-secondary">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-muted mt-4 text-sm md:text-base"
          >
            കോഴിക്കോട് നോർത്തിൽ നടന്ന പ്രധാന പരിപാടികളിൽ നിന്നുള്ള ദൃശ്യങ്ങൾ.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-white/5 ${img.className}`}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-50 group-hover:opacity-90 transition-opacity duration-300 z-10" />

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-secondary font-black tracking-widest uppercase bg-secondary/15 backdrop-blur-sm px-2 py-0.5 rounded-md mb-1.5 inline-block">
                  {img.category}
                </span>
                <h3 className="text-white font-bold text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.title}
                </h3>
              </div>

              {/* Zoom indicator */}
              <div className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-bg-dark/70 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox with navigation */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full flex flex-col items-center gap-4"
            >
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
              <div className="text-center">
                <span className="text-xs text-secondary font-black tracking-widest uppercase bg-secondary/15 px-2.5 py-1 rounded-md">
                  {images[selectedIndex].category}
                </span>
                <p className="text-white font-bold mt-2 text-lg">{images[selectedIndex].title}</p>
                <p className="text-text-muted text-xs mt-1">{selectedIndex + 1} / {images.length}</p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
