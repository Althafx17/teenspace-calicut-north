import { MapPin, Phone, Mail } from 'lucide-react'

const FbIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const IgIcon = () => <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
const WaIcon = () => <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>

const contacts = [
  { icon: MapPin, title: 'Location',       value: 'Mujahid Centre, Wisdom Office, Kozhikode North — 673620', link: 'https://maps.google.com/?q=Mujahid+centre+Wisdom+office+kozhikode+north' },
  { icon: Phone, title: 'Call / WhatsApp', value: '62823 97438 · 95672 76017',                               link: 'tel:+916282397438' },
  { icon: Mail,  title: 'Email',           value: 'wisdomstudentskkdnorth@gmail.com',                        link: 'mailto:wisdomstudentskkdnorth@gmail.com' },
]

const socials = [
  { icon: FbIcon, name: 'Facebook',  href: '#' },
  { icon: IgIcon, name: 'Instagram', href: '#' },
  { icon: WaIcon, name: 'WhatsApp',  href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-white border-t border-[#e5e7eb] py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-3">Contact</p>
          <h2 className="heading-lg">Get in touch.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: contact rows */}
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-flat flex items-start gap-4 hover:border-[#dc2626] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-[#dc2626] flex-shrink-0">
                  <c.icon size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#0f294a] mb-0.5">{c.title}</p>
                  <p className="text-[#64748b] text-sm group-hover:text-[#dc2626] transition-colors">{c.value}</p>
                </div>
              </a>
            ))}

            {/* Socials */}
            <div className="pt-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#0f294a] mb-3">Follow us</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.name}
                    className="w-9 h-9 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#0f294a] hover:text-[#dc2626] hover:border-[#dc2626] transition-all"
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-xl overflow-hidden border border-[#e5e7eb] h-[320px]">
            <iframe
              src="https://maps.google.com/maps?q=Vatakara%2C+Nadapuram%2C+Balussery%2C+Kozhikode+District&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kozhikode North Map"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
