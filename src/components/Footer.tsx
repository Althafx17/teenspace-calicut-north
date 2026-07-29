import { ArrowUp } from 'lucide-react'
import { WisdomWordmark } from '@/components/WisdomLogo'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#highlights' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Register Now', href: '#register' },
  ]

  return (
    <footer className="bg-[#040810] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
        <div className="md:col-span-5 flex flex-col items-start gap-4">
          <a href="#home">
            <WisdomWordmark />
          </a>
          <p className="text-xs text-text-muted leading-relaxed max-w-sm mt-2">
            Plus One, Plus Two വിദ്യാർത്ഥികളുടെ സർവതോമുഖ വളർച്ചക്കായി — ധാർമ്മിക ബോധം, വിജ്ഞാനം, നേതൃത്വം, സാഹോദര്യം എന്നിവ ഉയർത്തിപ്പിടിച്ച്, കോഴിക്കോട് നോർത്ത് Wisdom Students ഈ ഒക്ടോബർ 21-ന് ഒരു ഗ്രാൻഡ് കോൺഫറൻസ് ഒരുക്കുന്നു.
          </p>
          <div className="flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-primary font-bold">For +1 & +2 Students Only</span>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Quick Links</h4>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-xs text-text-muted hover:text-secondary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 flex flex-col gap-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-widest">Office Contact</h4>
          <address className="not-italic text-xs text-text-muted flex flex-col gap-2 leading-relaxed">
            <span>Wisdom Centre, Kozhikode, Kerala, India - 673001</span>
            <span>Phone: +91 98765 43210</span>
            <span>Email: info@wisdomstudentskozhikode.org</span>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-text-muted text-center sm:text-left">
          © {new Date().getFullYear()} Kozhikode North Wisdom Students. All Rights Reserved.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 hover:border-secondary/30 flex items-center justify-center text-text-muted hover:text-secondary transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  )
}
