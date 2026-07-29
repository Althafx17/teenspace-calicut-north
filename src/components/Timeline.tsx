import { motion } from 'framer-motion'

const steps = [
  {
    date: 'July 2026',
    title: 'Online Registration',
    ml: 'റെജിസ്ട്രേഷൻ',
    desc: 'Registration portal opens for +1 and +2 students across Kozhikode North district.',
  },
  {
    date: 'August / September 2026',
    title: 'Selection Process',
    ml: 'തിരഞ്ഞെടുപ്പ്',
    desc: 'Reviewing applications and selecting delegates for the final seats.',
  },
  {
    date: 'October 10, 2026',
    title: 'Orientation Session',
    ml: 'ഓറിയന്റേഷൻ',
    desc: 'Preparatory orientation for all selected student delegates.',
  },
  {
    date: 'October 21, 2026',
    title: 'Teenspace Conference',
    ml: 'കോൺഫറൻസ്',
    desc: 'The grand event day filled with sessions, panel discussions, and workshops.',
  },
  {
    date: 'Post-Conference 2026',
    title: 'Follow-up Programs',
    ml: 'തുടർ പ്രവർത്തനങ്ങൾ',
    desc: 'Ongoing leadership courses and volunteer opportunities for student delegates.',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="bg-void py-32 border-t border-[#111111]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Fixed Headline */}
          <div className="lg:col-span-5 sticky top-24">
            <span className="tag-iris mb-4">roadmap</span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-white dala-heading-lg mt-4"
            >
              The journey to Teenspace.
            </motion.h2>
            <p className="text-[#9a9a9a] text-[15px] font-light mt-6 max-w-sm">
              Key milestones from registration to the main event day and post-event follow-ups.
            </p>
          </div>

          {/* Right Column: Roadmap List */}
          <div className="lg:col-span-7 flex flex-col gap-12">
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex gap-6 items-start border-b border-[#111111] pb-8 last:border-0 last:pb-0"
              >
                {/* Saffron spark indicator */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffb829] mt-2.5 flex-shrink-0" />
                
                <div className="flex flex-col gap-2">
                  <span className="text-[12px] font-mono uppercase font-bold tracking-wider text-[#8052ff]">
                    {s.date}
                  </span>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-white font-medium text-[22px] tracking-tight">
                      {s.title}
                    </h3>
                    <span className="text-[12px] font-mono text-[#9a9a9a]">{s.ml}</span>
                  </div>
                  <p className="text-[#9a9a9a] text-[16px] font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
