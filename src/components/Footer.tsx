export default function Footer() {
  return (
    <footer className="bg-void border-t border-[#111111] py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <div className="w-[40px] h-[40px] overflow-hidden relative flex-shrink-0">
            <img 
              src="/wisdom_logo.png" 
              alt="Wisdom Logo" 
              className="w-[80px] h-[40px] max-w-none absolute left-0 top-0 object-cover object-left" 
            />
          </div>
          <div className="flex flex-col leading-none gap-0.5 select-none text-left">
            <span className="text-[#0f172a] font-extrabold text-[14px] tracking-tight uppercase">
              WISDOM <span className="text-[#FF3E8A]">students</span>
            </span>
            <span className="text-[9px] text-[#475569] font-mono tracking-widest uppercase font-bold">
              Kozhikode North &mdash; Teenspace 2026
            </span>
          </div>
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
