import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { WisdomLogoMark } from '@/components/WisdomLogo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#highlights' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="group hover:opacity-90 transition-opacity flex items-center gap-2.5">
            <WisdomLogoMark size={38} />
            <div className="flex flex-col leading-none gap-0.5">
              <p className="font-black text-xs tracking-tight text-white">
                WISD<span className="text-primary">O</span>M{' '}
                <span className="text-secondary">st</span>udents
              </p>
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400">
                Kozhikode North
              </p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-muted hover:text-white transition-colors duration-200 text-sm font-medium relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-secondary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#register"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Register Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-dark/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <div className="flex justify-center mb-4 items-center gap-2.5">
                <WisdomLogoMark size={38} />
                <div className="flex flex-col leading-none gap-0.5">
                  <p className="font-black text-sm text-white">
                    WISD<span className="text-primary">O</span>M{' '}
                    <span className="text-secondary">st</span>udents
                  </p>
                  <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400">Kozhikode North</p>
                </div>
              </div>
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6"
              >
                <a
                  href="#register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block px-10 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-primary to-secondary text-white shadow-xl transition-all duration-300"
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
