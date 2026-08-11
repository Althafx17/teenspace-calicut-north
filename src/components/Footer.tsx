import { BrandLogo } from './Navbar'
import { socials } from './Contact'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e7eb] py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand Logo */}
        <BrandLogo />

        {/* Navigation & Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-6 text-[13px] font-semibold">
            <a href="#about"    className="text-[#64748b] hover:text-[#29b6f6] transition-colors">About</a>
            <a href="#register" className="text-[#64748b] hover:text-[#29b6f6] transition-colors">Register</a>
            <a href="#gallery"  className="text-[#64748b] hover:text-[#29b6f6] transition-colors">Gallery</a>
            <a href="#contact"  className="text-[#64748b] hover:text-[#29b6f6] transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-8 h-8 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#0f294a] hover:text-[#29b6f6] hover:border-[#29b6f6] transition-all"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[#9ca3af] text-[12px]">
          © 2026 Wisdom Students · Kozhikode North
        </p>
      </div>
    </footer>
  )
}
