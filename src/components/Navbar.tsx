import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function BrandLogo({ align = 'start' }: { align?: 'start' | 'center' }) {
  const isCenter = align === 'center'
  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center' : 'items-start'} justify-center select-none`}>
      {/* Top Branding Line: WISDOM students Kozhikode North */}
      <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] leading-none mb-0.5">
        <span className="font-serif font-black tracking-widest text-[#0f294a]">
          WISDOM
        </span>
        <span className="font-black text-[#0f294a] flex items-center tracking-tight">
          st<span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#dc2626] text-white text-[9px] font-black mx-[0.5px] leading-none">u</span>dents
        </span>
        <span className="font-extrabold text-[#0f294a] ml-1 tracking-tight">
          Kozhikode North
        </span>
      </div>

      {/* Bottom Logo: Teenspace */}
      <div className="h-[32px] sm:h-[36px] overflow-hidden flex items-center justify-start">
        <img
          src="/TEENSPACE-01-2.png"
          alt="Teenspace Logo"
          width={110}
          height={36}
          fetchPriority="high"
          decoding="sync"
          className="h-[32px] sm:h-[36px] w-auto object-contain scale-[1.65] origin-left"
        />
      </div>
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
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-[#e5e7eb]">
        <nav className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <BrandLogo />
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
        </nav>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          <BrandLogo align="center" />
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
    </>
  )
}
