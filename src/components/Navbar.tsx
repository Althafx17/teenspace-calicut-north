import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'About',     href: '#about'      },
    { label: 'Gallery',   href: '#highlights'  },
    { label: 'Speakers',  href: '#speakers'    },
    { label: 'Timeline',  href: '#timeline'    },
    { label: 'FAQ',       href: '#faq'         },
    { label: 'Contact',   href: '#contact'     },
  ]

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-[100] bg-white/85 backdrop-blur-md border-b border-slate-200/50 transition-all duration-200">
        <nav className="max-w-[1280px] mx-auto px-6 min-h-[80px] py-2 flex items-center justify-between">
          {/* Logo Lockup */}
          <a href="#home" className="flex items-center justify-center w-[130px] h-[52px] overflow-hidden relative">
            <img 
              src="/TEENSPACE-01-2.png" 
              alt="Teenspace Logo" 
              className="h-[52px] w-auto object-cover scale-[1.9] origin-center max-w-none" 
            />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] uppercase font-semibold tracking-[0.025em] text-[#475569] hover:text-[#0f172a] transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Primary Action Button (Violet Pill) */}
          <div className="hidden md:flex">
            <a href="#register" className="btn-iris text-[13px] !py-3 !px-6">
              Register Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900 hover:text-black transition-colors p-1 z-50"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-40 bg-void flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              <div className="flex justify-center items-center w-[130px] h-[52px] mx-auto overflow-hidden relative mb-6">
                <img 
                  src="/TEENSPACE-01-2.png" 
                  alt="Teenspace Logo" 
                  className="h-[52px] w-auto object-cover scale-[1.9] origin-center max-w-none" 
                />
              </div>
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-normal text-[#475569] hover:text-[#0f172a] transition-colors tracking-tight text-center"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.255 }} className="flex justify-center mt-6">
                <a
                  href="#register"
                  onClick={() => setOpen(false)}
                  className="btn-iris text-base px-8 py-4 w-full max-w-[280px] text-center justify-center"
                >
                  Register Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
