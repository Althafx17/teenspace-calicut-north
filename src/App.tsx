import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Highlights from '@/components/Highlights'
import Speakers from '@/components/Speakers'
import Timeline from '@/components/Timeline'
import Countdown from '@/components/Countdown'
import Registration from '@/components/Registration'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-void">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Highlights />
        <Speakers />
        <Timeline />
        <Countdown />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
