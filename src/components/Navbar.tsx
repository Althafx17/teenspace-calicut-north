import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function WisdomStudentsTag({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isDark = theme === 'dark'
  return (
    <div className="flex items-center gap-2 text-[13px] sm:text-[14px] leading-none select-none">
      <span className={`font-serif font-black tracking-widest text-[14px] sm:text-[15px] ${isDark ? 'text-white' : 'text-[#0f294a]'}`}>
        WISDOM
      </span>
      <span className={`font-black text-[14px] sm:text-[15px] flex items-center tracking-tight ${isDark ? 'text-white' : 'text-[#0f294a]'}`}>
        st<span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#dc2626] text-white text-[10px] font-black mx-[0.5px] leading-none">u</span>dents
      </span>
      <span className={`font-extrabold text-[13px] sm:text-[14px] tracking-tight ml-1 ${isDark ? 'text-[#29b6f6]' : 'text-[#0f294a]'}`}>
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
      <div className="bg-[#0f294a] text-white py-2.5 px-6 border-b border-slate-800/60">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <WisdomStudentsTag theme="dark" />
          
          <div className="hidden sm:flex items-center gap-4 text-slate-300 text-[12px] font-semibold">
            <span>Higher Secondary Conference</span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span>Oct 21, 2026</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-[#e5e7eb]">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Bigger Teenspace Logo */}
          <a href="#home" className="flex items-center justify-start w-[160px] h-[58px] overflow-hidden">
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={160}
              height={58}
              fetchPriority="high"
              decoding="sync"
              className="h-[58px] w-auto object-contain scale-[2.25] origin-left"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] font-bold uppercase tracking-wider text-[#0f294a] hover:text-[#29b6f6] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a href="#register" className="hidden md:inline-flex btn-primary text-[13px] !py-3 !px-6">
            Register Now
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#0f294a] p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <div className="flex flex-col items-center gap-4">
            <WisdomStudentsTag theme="light" />
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={150}
              height={54}
              className="h-[54px] w-auto object-contain scale-[2.2] origin-center mt-2"
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
            className="btn-primary mt-2 w-56 justify-center py-3.5 text-sm"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  )
}
