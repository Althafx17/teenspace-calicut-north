import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'ആർക്കൊക്കെയാണ് സമ്മേളനത്തിൽ പങ്കെടുക്കാൻ സാധിക്കുക?', a: 'കോഴിക്കോട് നോർത്ത് പരിധിയിലെ ഹൈസ്കൂൾ, ഹയർ സെക്കൻഡറി, കോളേജ്, യൂണിവേഴ്സിറ്റി തലങ്ങളിലെ വിദ്യാർത്ഥികൾക്ക് കോൺഫറൻസിൽ പങ്കെടുക്കാവുന്നതാണ്.' },
  { q: 'രജിസ്ട്രേഷൻ ഫീസ് നൽകേണ്ടതുണ്ടോ?', a: 'ഇല്ല. തിരഞ്ഞെടുക്കപ്പെടുന്ന പ്രതിനിധികൾക്ക് പ്രവേശനം തികച്ചും സൗജന്യമാണ്. യാതൊരുവിധ ഫീസും ഈടാക്കുന്നതല്ല.' },
  { q: 'രജിസ്റ്റർ ചെയ്ത എല്ലാവർക്കും പ്രവേശനം ലഭിക്കുമോ?', a: 'സീറ്റുകൾ പരിമിതമായതിനാൽ, രജിസ്റ്റർ ചെയ്ത വിദ്യാർത്ഥികളിൽ നിന്ന് തിരഞ്ഞെടുക്കപ്പെടുന്ന നിശ്ചിത പ്രതിനിധികൾക്ക് മാത്രമായിരിക്കും പ്രവേശനാനുമതി.' },
  { q: 'ഓറിയന്റേഷൻ ക്ലാസുകൾ എന്നാണുള്ളത്?', a: 'തിരഞ്ഞെടുക്കപ്പെടുന്ന പ്രതിനിധികൾക്കായി ഒക്ടോബർ 10, 2026-ന് കോഴിക്കോട് വെച്ചാണ് ഓറിയന്റേഷൻ ക്ലാസ് സംഘടിപ്പിക്കുന്നത്.' },
  { q: 'ഭക്ഷണവും പഠന കിറ്റുകളും ലഭ്യമാക്കുമോ?', a: 'അതെ. തിരഞ്ഞെടുക്കപ്പെടുന്ന എല്ലാ പ്രതിനിധികൾക്കും ഭക്ഷണവും പ്രത്യേക ലക്ചർ കിറ്റുകളും ഒക്ടോബർ 21-ലെ സമ്മേളന വേദിയിൽ വെച്ച് സൗജന്യമായി വിതരണം ചെയ്യുന്നതാണ്.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">QUESTIONS & ANSWERS</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Frequently Asked <span className="text-secondary">Questions</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-text-muted mt-4 text-sm md:text-base">
            സമ്മേളനവുമായി ബന്ധപ്പെട്ട് വിദ്യാർത്ഥികൾ സാധാരണ ചോദിക്കാറുള്ള ചോദ്യങ്ങളും അവയ്ക്കുള്ള മറുപടികളും.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-6 md:p-8 rounded-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/5 last:border-0 py-4">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between text-left py-3 text-base md:text-lg font-bold text-white hover:text-secondary transition-colors group">
                <span>{faq.q}</span>
                <span className={`w-8 h-8 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-text-muted group-hover:text-secondary transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }} className="overflow-hidden">
                    <p className="text-xs md:text-sm text-slate-300 leading-relaxed pb-4 pt-1 pr-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
