export default function Footer() {
  return (
    <footer className="bg-void border-t border-[#e2e8f0] py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <img src="/TEENSPACE-01-2.png" alt="Teenspace Logo" className="h-10 w-auto object-contain max-w-none" />
        </div>

        {/* Minimal Link list */}
        <div className="flex items-center gap-6 text-[14px]">
          <a href="#about" className="text-[#475569] hover:text-[#0f172a] transition-colors">About</a>
          <a href="#highlights" className="text-[#475569] hover:text-[#0f172a] transition-colors">Gallery</a>
          <a href="#register" className="text-[#475569] hover:text-[#0f172a] transition-colors">Register</a>
        </div>

      </div>
    </footer>
  )
}
