import { ShieldCheck, Compass } from 'lucide-react'

const blocks = [
  {
    icon: ShieldCheck,
    title: 'Moral & Islamic Focus',
    body: 'Teenspace integrates moral guidelines with a strong Islamic value system to foster character, integrity, and self-discipline. We help students develop ethical anchors, build a strong moral identity, and psychological resilience to navigate contemporary peer pressures, digital habits, and modern lifestyle dilemmas.',
  },
  {
    icon: Compass,
    title: 'Career & Personality',
    body: 'Our high-energy training segments empower teens to understand their potential, improve societal behavior, and design successful academic trajectories. Guided by experts, students explore career opportunities, learn emotional intelligence, and discover how to become responsible, value-driven citizens.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white border-t border-[#e5e7eb] py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Overview</p>
          <h2 className="heading-lg mb-3">About Teenspace</h2>
          <p className="text-[#64748b] text-base max-w-2xl">
            A brief overview of the programme, its objectives, and what we aim to deliver.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((b, i) => (
            <div key={i} className="card-flat">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#dc2626] mb-5">
                <b.icon size={20} />
              </div>
              <h3 className="heading-sm mb-3">{b.title}</h3>
              <p className="text-[#64748b] text-[15px] leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
