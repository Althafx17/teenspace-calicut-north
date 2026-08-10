import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

const images = [
  { src: '/WhatsApp Image 2026-07-19 at 4.15.20 PM.jpeg', title: 'Grand Conference Session',    category: 'Main Event'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.21 PM.jpeg', title: 'Student Leadership Talk',     category: 'Leadership'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.22 PM.jpeg', title: 'Youth Brotherhood Circle',    category: 'Brotherhood'  },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.22 PM (1).jpeg', title: 'Knowledge Workshop',      category: 'Workshops'    },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.23 PM.jpeg', title: 'Scholar Panel Discussion',    category: 'Scholars'     },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.24 PM.jpeg', title: 'Interactive Q&A',             category: 'Discussions'  },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.25 PM.jpeg', title: 'Motivational Session',        category: 'Motivation'   },
  { src: '/WhatsApp Image 2026-07-19 at 4.15.26 PM.jpeg', title: 'Community Gathering',         category: 'Community'    },
].slice(0, 8)

export default function Highlights() {
  const [sel, setSel] = useState<number | null>(null)

  const prev = () => setSel(i => i === null ? null : i === 0 ? images.length - 1 : i - 1)
  const next = () => setSel(i => i === null ? null : i === images.length - 1 ? 0 : i + 1)

  return (
    <section id="gallery" className="bg-white border-t border-[#e5e7eb] py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-3">Gallery</p>
          <h2 className="heading-lg">From the ground.</h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="gallery-item aspect-square"
              onClick={() => setSel(i)}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gallery-overlay">
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-red-300">{img.category}</p>
                  <p className="text-white text-[13px] font-semibold leading-snug mt-0.5">{img.title}</p>
                </div>
                <ZoomIn size={16} className="text-white/70 flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {sel !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSel(null)}
        >
          <button onClick={() => setSel(null)} className="absolute top-5 right-5 text-white/70 hover:text-white">
            <X size={20} />
          </button>
          <button onClick={e => { e.stopPropagation(); prev() }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
            <ChevronLeft size={28} />
          </button>

          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img
              src={images[sel].src}
              alt={images[sel].title}
              className="w-full h-auto max-h-[75vh] object-contain rounded-xl block"
            />
            <div className="mt-4 flex items-center justify-between px-1">
              <div>
                <p className="text-red-400 text-[11px] font-bold uppercase tracking-widest">{images[sel].category}</p>
                <p className="text-white text-sm font-semibold mt-0.5">{images[sel].title}</p>
              </div>
              <span className="text-white/40 text-xs font-mono">{sel + 1} / {images.length}</span>
            </div>
          </div>

          <button onClick={e => { e.stopPropagation(); next() }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  )
}
