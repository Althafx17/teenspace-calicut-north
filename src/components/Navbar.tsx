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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-2">

          {/* Clean Uncropped Logo */}
          <a href="#home" className="flex items-center justify-start h-[52px] shrink-0">
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={180}
              height={52}
              fetchPriority="high"
              decoding="sync"
              className="h-[48px] sm:h-[54px] w-auto object-contain max-w-[180px] sm:max-w-[220px]"
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

          {/* Action Buttons (Register + Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#register"
              className="btn-primary register-button inline-flex text-[11px] sm:text-[13px] !py-2 !px-3 sm:!py-2.5 sm:!px-5 rounded-lg"
            >
              Register Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center gap-1 px-2.5 py-2 rounded-lg border border-[#e5e7eb] bg-slate-50 text-[#0f294a] text-[11px] font-bold uppercase tracking-wider hover:bg-slate-100 hover:border-[#29b6f6] transition-all"
              aria-label="Toggle navigation menu"
            >
              {open ? (
                <>
                  <X size={16} />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu size={16} />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 md:hidden">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between border-b border-[#e5e7eb] pb-4">
            <WisdomStudentsTag theme="light" />
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#e5e7eb] bg-slate-50 text-[#0f294a] text-[12px] font-bold uppercase tracking-wider"
            >
              <X size={18} />
              <span>Close</span>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex flex-col items-center gap-6 my-auto">
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={180}
              height={54}
              className="h-[54px] w-auto object-contain max-w-[200px] mb-2"
            />
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
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 w-60 justify-center py-3.5 text-sm"
            >
              Register Now
            </a>
          </div>

          <p className="text-center text-xs text-[#9ca3af]">© 2026 Wisdom Students · Kozhikode North</p>
        </div>
      )}
    </header>
  )
}
