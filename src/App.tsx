import { lazy, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const About        = lazy(() => import('@/components/About'))
const Registration = lazy(() => import('@/components/Registration'))
const Highlights   = lazy(() => import('@/components/Highlights'))
const Contact      = lazy(() => import('@/components/Contact'))
const Footer       = lazy(() => import('@/components/Footer'))

function SectionFallback() {
  return <div className="w-full py-24 border-t border-[#e5e7eb]" aria-hidden="true" />
}

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<SectionFallback />}><About /></Suspense>
        <Suspense fallback={<SectionFallback />}><Registration /></Suspense>
        <Suspense fallback={<SectionFallback />}><Highlights /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </div>
  )
}

export default App
