export default function Footer() {
  return (
    <footer className="bg-void border-t border-[#111111] py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <img src="/wisdom_logo.png" alt="Wisdom Logo" className="h-10 w-auto object-contain" />
          <span className="text-[#bdbdbd] text-[13px] font-mono tracking-wider uppercase">
            Teenspace 2026 &mdash; Wisdom Students Kozhikode North
          </span>
        </div>

        {/* Minimal Link list */}
        <div className="flex items-center gap-6 text-[14px]">
          <a href="#about" className="text-[#9a9a9a] hover:text-white transition-colors">About</a>
          <a href="#highlights" className="text-[#9a9a9a] hover:text-white transition-colors">Gallery</a>
          <a href="#register" className="text-[#9a9a9a] hover:text-white transition-colors">Register</a>
        </div>

      </div>
    </footer>
  )
}
