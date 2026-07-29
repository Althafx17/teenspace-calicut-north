import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

const FbIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
const IgIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
const YtIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
const WaIcon = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>

export default function Contact() {
  const contacts = [
    { icon: MapPin, title: 'Our Location', value: 'Wisdom Centre, Kozhikode, Kerala - 673001', link: 'https://maps.google.com/?q=Wisdom+Centre+Kozhikode', color: 'text-pink-500 bg-pink-500/10' },
    { icon: Phone, title: 'Call / WhatsApp', value: '+91 98765 43210, +91 99999 88888', link: 'tel:+919876543210', color: 'text-blue-500 bg-blue-500/10' },
    { icon: Mail, title: 'Email Support', value: 'info@wisdomstudentskozhikode.org', link: 'mailto:info@wisdomstudentskozhikode.org', color: 'text-emerald-400 bg-emerald-500/10' },
  ]

  const socials = [
    { icon: FbIcon, name: 'Facebook', href: '#', color: 'hover:text-blue-500 hover:border-blue-500/30' },
    { icon: IgIcon, name: 'Instagram', href: '#', color: 'hover:text-pink-500 hover:border-pink-500/30' },
    { icon: YtIcon, name: 'YouTube', href: '#', color: 'hover:text-red-500 hover:border-red-500/30' },
    { icon: WaIcon, name: 'WhatsApp', href: '#', color: 'hover:text-green-500 hover:border-green-500/30' },
  ]

  return (
    <section id="contact" className="relative py-24 bg-bg-dark overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">GET IN TOUCH</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Contact <span className="text-secondary">Us</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-text-muted mt-4 text-sm md:text-base">
            സമ്മേളനവുമായി ബന്ധപ്പെട്ട എന്തെങ്കിലും സംശയങ്ങൾ ഉണ്ടെങ്കിൽ ഞങ്ങളെ ബന്ധപ്പെടാവുന്നതാണ്.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((c, idx) => (
            <motion.a key={idx} href={c.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col items-center text-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.color}`}><c.icon className="w-6 h-6" /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                <p className="text-xs md:text-sm text-text-muted font-semibold leading-relaxed">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-4 glass-card p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Connect on Social Media</h3>
              <p className="text-xs text-text-muted leading-relaxed mb-6">ഞങ്ങളുടെ സോഷ്യൽ മീഡിയ പേജുകൾ സന്ദർശിച്ച് ഏറ്റവും പുതിയ അപ്ഡേറ്റുകൾ അറിയൂ.</p>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((s, idx) => (
                  <a key={idx} href={s.href} className={`p-3 rounded-xl bg-slate-900 border border-white/5 flex flex-col items-center justify-center gap-2 text-text-muted transition-all duration-300 ${s.color} group`}>
                    <s.icon />
                    <span className="text-xs font-bold">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-xs text-primary font-black tracking-widest uppercase">WISDOM STUDENTS • KOZHIKODE NORTH</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/5 h-[300px] lg:h-auto min-h-[300px] relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.49071536663!2d75.72761614761036!3d11.267389279589715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x321557147d0e1e58!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kozhikode Map" className="absolute inset-0 grayscale contrast-125 opacity-70 hover:opacity-90 hover:grayscale-0 transition-all duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
