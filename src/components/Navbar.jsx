import { AnimatePresence, motion } from 'framer-motion'
import { Home, Layers3, Mail, Menu, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import skullBg from '../images/background/skull.jpg'
import logoImg from '../images/add img/logo.png'
import logotextImg from '../images/add img/logotext.jpeg'

const links = [
  { href: '#home', label: 'HOME', icon: Home },
  { href: '#services', label: 'SERVICES', icon: Layers3 },
  { href: '#store', label: 'STORE', icon: ShoppingBag },
  { href: '#contact', label: 'CONTACT US', icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const active = location.pathname + location.hash

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <header 
        className="fixed top-0 z-[1000] h-[100px] w-full border-b border-white/5 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(5,5,5,0.4), rgba(5,5,5,0.8)), url(${skullBg})` }}
      >
        <div className="flex h-full w-full items-center justify-between px-4">
          <a
            href="#home"
            className="group flex items-center gap-4 transition-all relative"
          >
            <div className="flex h-[188px] w-[188px] items-center justify-center transition-all group-hover:scale-105 overflow-hidden absolute left-0 top-1/2 -translate-y-1/2">
              <img src={logoImg} alt="SILVR BLACC" className="w-full h-full object-cover mix-blend-screen brightness-110 contrast-110" />
            </div>
            <div className="h-[100px] flex items-center hidden sm:flex ml-[200px]">
              <img src={logotextImg} alt="SILVR BLACC" className="h-[78px] w-auto mix-blend-screen brightness-110 contrast-110" />
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`flex items-center gap-3 transition-all duration-300 font-nav nav-link-silver group/link ${
                  active === l.href
                    ? 'bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)] border-white/60'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <l.icon className="h-5 w-5 text-white transition-all group-hover/link:scale-110 group-hover/link:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[1100] bg-[#050505]"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <div className="flex h-[92px] items-center justify-between px-6">
              <div className="font-display text-[26px] tracking-[0.22em] chrome-silver">
                SILVR BLACC
              </div>
              <button
                type="button"
                className="gold-pill inline-flex h-12 w-12 items-center justify-center text-white"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 px-6 pt-10">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-6 font-display text-[32px] leading-none tracking-[0.08em] text-white/80 hover:text-white transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-white/50 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                    <l.icon className="h-6 w-6 text-white group-hover:scale-110 transition-all" />
                  </div>
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
