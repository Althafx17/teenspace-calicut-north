import { useState } from 'react'
import { Menu, X } from 'lucide-react'

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
        <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center justify-center w-[110px] h-[44px] overflow-hidden">
            <img
              src="/TEENSPACE-01-2.png"
              alt="Teenspace Logo"
              width={110}
              height={44}
              fetchPriority="high"
              decoding="sync"
              className="h-[44px] w-auto object-contain scale-[1.8] origin-center"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] font-semibold uppercase tracking-wider text-[#0f294a] hover:text-[#dc2626] transition-colors"
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
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-bold text-[#0f294a] hover:text-[#dc2626] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-52 justify-center"
          >
            Register Now
          </a>
        </div>
      )}
    </>
  )
}
