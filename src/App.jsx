import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import CursorGlow from './components/CursorGlow'
import Loader from './components/Loader'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const AIContent = lazy(() => import('./pages/AIContent'))
const Marketing = lazy(() => import('./pages/Marketing'))
const Political = lazy(() => import('./pages/Political'))
const Production = lazy(() => import('./pages/Production'))
const Store = lazy(() => import('./pages/Store'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HashScroller() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '')
      if (!id) return
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <HashScroller />
        <CursorGlow />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-creative" element={<AIContent />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/political" element={<Political />} />
          <Route path="/production" element={<Production />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
