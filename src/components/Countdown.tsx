import { useCountdown } from '@/hooks/useCountdown'
import { motion } from 'framer-motion'

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown('2026-10-21T09:00:00')
  const blocks = [
    { v: days,    l: 'days'    },
    { v: hours,   l: 'hours'   },
    { v: minutes, l: 'minutes' },
    { v: seconds, l: 'seconds' },
  ]

  return (
    <section className="bg-void py-32 border-t border-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-16">
          <span className="tag-saffron mb-4">countdown</span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-bone dala-heading-lg mt-4"
          >
            {isExpired ? 'The event has started.' : 'The conference begins in.'}
          </motion.h2>
        </div>

        {!isExpired && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto pt-6">
            {blocks.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center justify-center p-6 bg-transparent"
              >
                <span
                  className="font-mono text-bone tabular-nums tracking-[-0.04em]"
                  style={{ fontSize: 'clamp(56px, 8vw, 96px)', fontWeight: 300, lineHeight: 1 }}
                >
                  {String(b.v).padStart(2, '0')}
                </span>
                <span className="text-[12px] uppercase font-bold tracking-widest text-[#FF3E8A] mt-4">
                  {b.l}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {isExpired && (
          <div className="flex flex-col items-center gap-4">
            <span className="tag-iris">live now</span>
            <p className="text-ash text-[18px] font-light max-w-sm">
              We are live at Kozhikode North. Follow our updates.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
