import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { socials } from './Contact'

export function WisdomStudentsTag({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center gap-2 text-[12px] leading-none select-none">
      <span className={`font-serif font-black tracking-widest text-[13px] ${isDark ? 'text-white' : 'text-[#0f294a]'}`}>
        WISDOM
      </span>
      <span className={`font-black text-[13px] flex items-center tracking-tight ${isDark ? 'text-white' : 'text-[#0f294a]'}`}>
        st<span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#dc2626] text-white text-[9px] font-black mx-[0.5px] leading-none">u</span>dents
      </span>
      <span className={`font-bold text-[13px] tracking-tight ml-1 ${isDark ? 'text-[#29b6f6]' : 'text-[#0f294a]'}`}>
        Kozhikode North
      </span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { label: 'About',    href: '#about'      },
    { label: 'Gallery',  href: '#gallery'    },
    { label: 'Contact',  href: '#contact'    },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Mini Top Bar */}
      <div className="bg-[#0f294a] text-white py-2 px-6 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <WisdomStudentsTag theme="dark" />
          
          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-[11px] font-semibold">
            <span>Higher Secondary Conference</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span>Oct 21, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Restored Teenspace Logo */}
          <a href="#home" className="flex items-center justify-start w-[120px] h-[44px] overflow-hidden">
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={120}
              height={44}
              fetchPriority="high"
              decoding="sync"
              className="h-[44px] w-auto object-contain scale-[1.8] origin-left"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-semibold uppercase tracking-wider text-[#0f294a] hover:text-[#29b6f6] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#register" className="hidden md:inline-flex btn-primary text-[13px] !py-2.5 !px-5">
            Register
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#0f294a] p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <div className="flex flex-col items-center gap-3">
            <WisdomStudentsTag theme="light" />
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={120}
              height={44}
              className="h-[44px] w-auto object-contain scale-[1.8] origin-center mt-2"
            />
          </div>

          <div className="flex flex-col items-center gap-6 mt-4">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-bold text-[#0f294a] hover:text-[#29b6f6] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-52 justify-center"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  )
}
